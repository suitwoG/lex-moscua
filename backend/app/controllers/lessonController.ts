import type { Request, Response } from 'express';
import prisma from '../prisma.js';

export const getLessonDetails = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Lesson ID required' });

    const lesson = await prisma.lesson.findUnique({
        where: { id },
        include: {
            exercises: {
                select: { id: true, type: true, orderIndex: true }
            }
        }
    });
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json(lesson);
};

export const getLessonExercises = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Lesson ID required' });

    const exercises = await prisma.exercise.findMany({
        where: { lessonId: id },
        orderBy: { orderIndex: 'asc' },
        include: {
            answerOptions: {
                select: { id: true, text: true, orderIndex: true } // Exclude isCorrect
            }
        }
    });
    res.json(exercises);
};
