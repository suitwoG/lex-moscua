import { Router } from 'express';
import { getProgress } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/progress', authenticate, getProgress);

export default router;
