// backend/app/routes/authRoutes.js
import { Router } from 'express';

const router = Router();

// фейковый логин: всегда "успех"
router.post('/login', (req, res) => {
    console.log('POST /api/auth/login', req.body);

    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    return res.json({
        token: 'dev-token',
        user: {
            id: 1,
            email,
            name: 'Dev User',
            role: 'admin',
        },
    });
});

// просто проверка, что сервер жив
router.get('/ping', (req, res) => {
    res.json({ ok: true });
});

export default router;
