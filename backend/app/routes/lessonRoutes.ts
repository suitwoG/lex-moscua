import { Router } from 'express';
import { getLessonDetails, getLessonExercises } from '../controllers/lessonController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/:id', authenticate, getLessonDetails);
router.get('/:id/exercises', authenticate, getLessonExercises);

export default router;
