import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@lexmoscua.com' },
        update: {},
        create: {
            email: 'admin@lexmoscua.com',
            passwordHash: adminPassword,
            displayName: 'Admin User',
            role: 'ADMIN',
        },
    });

    console.log('✅ Admin user created:', admin.email);

    // Create sample module
    const module1 = await prisma.module.upsert({
        where: { slug: 'introduction-to-law' },
        update: {},
        create: {
            slug: 'introduction-to-law',
            title: 'Introduction to Law',
            description: 'Basic concepts of legal system',
            topicCode: 'LAW101',
            orderIndex: 1,
            icon: 'book',
            color: 'blue',
            isActive: true,
        },
    });

    console.log('✅ Module created:', module1.title);

    // Create sample lesson
    const lesson1 = await prisma.lesson.upsert({
        where: { id: '00000000-0000-0000-0000-000000000001' },
        update: {},
        create: {
            id: '00000000-0000-0000-0000-000000000001',
            moduleId: module1.id,
            title: 'What is Law?',
            description: 'Understanding the basic definition of law',
            orderIndex: 1,
            xpReward: 50,
            isActive: true,
        },
    });

    console.log('✅ Lesson created:', lesson1.title);

    // Create sample exercises
    const exercise1 = await prisma.exercise.create({
        data: {
            lessonId: lesson1.id,
            title: 'Definition of Law',
            questionText: 'What is the primary purpose of law in society?',
            type: 'SINGLE_CHOICE',
            explanation: 'Law exists to maintain order, resolve disputes, and protect rights.',
            orderIndex: 1,
            maxScore: 10,
        },
    });

    // Create answer options for exercise1
    await prisma.answerOption.createMany({
        data: [
            {
                exerciseId: exercise1.id,
                text: 'To maintain order and protect rights',
                isCorrect: true,
                orderIndex: 1,
            },
            {
                exerciseId: exercise1.id,
                text: 'To punish criminals only',
                isCorrect: false,
                orderIndex: 2,
            },
            {
                exerciseId: exercise1.id,
                text: 'To generate revenue for the government',
                isCorrect: false,
                orderIndex: 3,
            },
            {
                exerciseId: exercise1.id,
                text: 'To limit personal freedoms',
                isCorrect: false,
                orderIndex: 4,
            },
        ],
    });

    console.log('✅ Exercise created:', exercise1.title);

    // Create TRUE_FALSE exercise
    const exercise2 = await prisma.exercise.create({
        data: {
            lessonId: lesson1.id,
            title: 'Legal Systems',
            questionText: 'All countries use the same legal system.',
            type: 'TRUE_FALSE',
            explanation: 'Different countries have different legal systems (e.g., common law, civil law).',
            orderIndex: 2,
            maxScore: 10,
        },
    });

    await prisma.answerOption.createMany({
        data: [
            {
                exerciseId: exercise2.id,
                text: 'True',
                isCorrect: false,
                orderIndex: 1,
            },
            {
                exerciseId: exercise2.id,
                text: 'False',
                isCorrect: true,
                orderIndex: 2,
            },
        ],
    });

    console.log('✅ All seed data created successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
