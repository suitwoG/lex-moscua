import { Router } from 'express';
import { submitAnswer } from '../controllers/exerciseController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/:id/answer', authenticate, submitAnswer);

export default router;
