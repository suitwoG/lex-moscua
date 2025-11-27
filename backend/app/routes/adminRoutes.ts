import { Router } from 'express';
import { createModule, createLesson, createExercise } from '../controllers/adminController.js';
import { authenticate, requireAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/modules', authenticate, requireAdmin, createModule);
router.post('/lessons', authenticate, requireAdmin, createLesson);
router.post('/exercises', authenticate, requireAdmin, createExercise);

export default router;
