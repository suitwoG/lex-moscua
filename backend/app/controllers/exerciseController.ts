import type { Request, Response } from 'express';
import prisma from '../prisma.js';

export const submitAnswer = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Exercise ID required' });

    const { answer_option_ids, free_text } = req.body;
    // @ts-ignore
    const userId = req.user?.userId;

    const exercise = await prisma.exercise.findUnique({
        where: { id },
        include: { answerOptions: true, lesson: true }
    });

    if (!exercise) return res.status(404).json({ message: 'Exercise not found' });

    let isCorrect = false;
    let score = 0;
    let correctOptions: string[] = [];

    if (exercise.type === 'SINGLE_CHOICE' || exercise.type === 'TRUE_FALSE') {
        const selectedId = answer_option_ids?.[0];
        const correctOption = exercise.answerOptions.find(o => o.isCorrect);
        if (correctOption && selectedId === correctOption.id) {
            isCorrect = true;
        }
        correctOptions = exercise.answerOptions.filter(o => o.isCorrect).map(o => o.id);
    } else if (exercise.type === 'MULTI_CHOICE') {
        const selectedIds = new Set(answer_option_ids || []);
        const correctIds = new Set(exercise.answerOptions.filter(o => o.isCorrect).map(o => o.id));
        if (selectedIds.size === correctIds.size && [...selectedIds].every(val => correctIds.has(val as string))) {
            isCorrect = true;
        }
        correctOptions = Array.from(correctIds);
    } else if (exercise.type === 'FILL_IN_BLANK') {
        // @ts-ignore
        const correctAnswers = exercise.meta?.correct_answers as string[] || [];
        const userText = (free_text || '').trim().toLowerCase();
        if (correctAnswers.some((ans: string) => ans.trim().toLowerCase() === userText)) {
            isCorrect = true;
        }
        correctOptions = correctAnswers;
    }

    if (isCorrect) {
        score = exercise.maxScore;
    }

    await prisma.exerciseAttempt.create({
        data: {
            userId,
            exerciseId: id,
            answerPayload: req.body,
            isCorrect,
            score
        }
    });

    let lessonProgress = await prisma.lessonProgress.findUnique({
        where: { userId_lessonId: { userId, lessonId: exercise.lessonId } }
    });

    if (!lessonProgress) {
        lessonProgress = await prisma.lessonProgress.create({
            data: { userId, lessonId: exercise.lessonId }
        });
    }

    await prisma.lessonProgress.update({
        where: { id: lessonProgress.id },
        data: {
            scoreTotal: { increment: score },
            lastAttemptAt: new Date()
        }
    });

    if (score > 0) {
        const userProgress = await prisma.userProgress.findUnique({
            where: { userId_moduleId: { userId, moduleId: exercise.lesson.moduleId } }
        });

        if (userProgress) {
            await prisma.userProgress.update({
                where: { id: userProgress.id },
                data: { xpTotal: { increment: score } }
            });
        } else {
            await prisma.userProgress.create({
                data: {
                    userId,
                    moduleId: exercise.lesson.moduleId,
                    xpTotal: score
                }
            });
        }
    }

    res.json({
        is_correct: isCorrect,
        score,
        correct_options: correctOptions,
        explanation: exercise.explanation,
        legal_refs: exercise.legalRefs,
        xp_awarded: score
    });
};
