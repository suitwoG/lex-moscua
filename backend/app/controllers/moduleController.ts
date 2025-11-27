import type { Request, Response } from 'express';
import prisma from '../prisma.js';

export const getModules = async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.user?.userId;

    const modules = await prisma.module.findMany({
        where: { isActive: true },
        orderBy: { orderIndex: 'asc' },
        include: {
            userProgress: {
                where: { userId },
            },
        },
    });

    const formattedModules = modules.map(m => ({
        id: m.id,
        title: m.title,
        description: m.description,
        icon: m.icon,
        color: m.color,
        orderIndex: m.orderIndex,
        level: m.userProgress[0]?.level || 0,
        xpTotal: m.userProgress[0]?.xpTotal || 0,
        completedLessons: m.userProgress[0]?.completedLessons || 0,
    }));

    res.json(formattedModules);
};

export const getModuleDetails = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Module ID required' });

    // @ts-ignore
    const userId = req.user?.userId;

    const module = await prisma.module.findUnique({
        where: { id },
        include: {
            lessons: {
                where: { isActive: true },
                orderBy: { orderIndex: 'asc' },
                include: {
                    progress: {
                        where: { userId },
                    }
                }
            }
        }
    });

    if (!module) return res.status(404).json({ message: 'Module not found' });

    const lessons = module.lessons.map((l: any) => ({
        id: l.id,
        title: l.title,
        description: l.description,
        orderIndex: l.orderIndex,
        xpReward: l.xpReward,
        status: l.progress[0]?.isCompleted ? 'done' : 'new',
        isCompleted: l.progress[0]?.isCompleted || false,
    }));

    res.json({ ...module, lessons });
};
