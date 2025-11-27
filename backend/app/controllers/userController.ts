import type { Request, Response } from 'express';
import prisma from '../prisma.js';

export const getProgress = async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.user?.userId;

    const userProgress = await prisma.userProgress.findMany({
        where: { userId },
        include: { module: true }
    });

    const totalXp = userProgress.reduce((sum, p) => sum + p.xpTotal, 0);
    const streakCurrent = userProgress.reduce((max, p) => Math.max(max, p.streakCurrent), 0);
    const streakBest = userProgress.reduce((max, p) => Math.max(max, p.streakBest), 0);

    res.json({
        total_xp: totalXp,
        streak_current: streakCurrent,
        streak_best: streakBest,
        modules: userProgress.map(p => ({
            module_id: p.moduleId,
            level: p.level,
            xp_total: p.xpTotal,
            completed_lessons: p.completedLessons
        }))
    });
};
