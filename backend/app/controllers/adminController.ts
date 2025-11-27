import type { Request, Response } from 'express';
import prisma from '../prisma.js';

export const createModule = async (req: Request, res: Response) => {
    const module = await prisma.module.create({ data: req.body });
    res.json(module);
};

export const createLesson = async (req: Request, res: Response) => {
    const lesson = await prisma.lesson.create({ data: req.body });
    res.json(lesson);
};

export const createExercise = async (req: Request, res: Response) => {
    const { answerOptions, ...exerciseData } = req.body;
    const exercise = await prisma.exercise.create({
        data: {
            ...exerciseData,
            answerOptions: {
                create: answerOptions
            }
        }
    });
    res.json(exercise);
};
