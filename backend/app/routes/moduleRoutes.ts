import { Router } from 'express';
import { getModules, getModuleDetails } from '../controllers/moduleController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', authenticate, getModules);
router.get('/:id', authenticate, getModuleDetails);

export default router;
