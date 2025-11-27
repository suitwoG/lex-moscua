// backend/server.js
import express from 'express';
import cors from 'cors';
import authRoutes from './app/routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// чтобы парсить JSON в body
app.use(express.json());

// все auth-роуты будут /api/auth/...
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
