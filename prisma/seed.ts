import {
  DailyChallengeStatus,
  DailyChallengeType,
  LessonProgressStatus,
  LessonStatus,
  Prisma,
  PrismaClient,
  ShopItemCategory,
  ShopItemStatus,
  StreakEventType,
  TaskKind,
  UserRole,
  XpReason,
} from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const modulesSeed = [
  {
    title: "Основы государственности",
    description:
      "Базовые принципы и термины теории государства и права, фундаментальные подходы к происхождению государства.",
    order: 1,
    lessons: [
      {
        slug: "tgp-introduction",
        title: "Что такое государство?",
        summary:
          "Разбираем сущность государства, его признаки и ключевые функции в современном обществе.",
        order: 1,
        content: {
          sections: [
            {
              heading: "Определение государства",
              body: "Государство — это политико-территориальная организация общества, обладающая суверенитетом и публичной властью.",
            },
            {
              heading: "Признаки государства",
              items: [
                "Наличие публичной власти",
                "Суверенитет на определённой территории",
                "Право издавать обязательные нормы",
              ],
            },
          ],
        } satisfies Prisma.JsonObject,
        tasks: [
          {
            kind: TaskKind.MULTIPLE_CHOICE,
            prompt: "Выберите признак государства:",
            order: 1,
            payload: {
              options: [
                "Обязательные уроки в вузе",
                "Наличие публичной власти",
                "Соседский комитет",
                "Группы в соцсетях",
              ],
              correctIndex: 1,
            },
          },
          {
            kind: TaskKind.TRUE_FALSE,
            prompt: "Суверенитет означает независимость государственной власти.",
            order: 2,
            payload: {
              correct: true,
              explanation:
                "Суверенитет подразумевает верховенство государственной власти внутри страны и независимость вовне.",
            },
          },
        ],
      },
      {
        slug: "tgp-state-functions",
        title: "Функции государства",
        summary:
          "Изучаем внутренние и внешние функции государства, а также их эволюцию.",
        order: 2,
        content: {
          sections: [
            {
              heading: "Классификация функций",
              body: "Принято выделять внутренние и внешние функции государства. Внутренние направлены на общество, внешние — на международные отношения.",
            },
          ],
        } satisfies Prisma.JsonObject,
        tasks: [
          {
            kind: TaskKind.ORDERING,
            prompt: "Расположите этапы эволюции функций государства:",
            order: 1,
            payload: {
              items: [
                "Охранительная функция",
                "Экономическая функция",
                "Социальная функция",
                "Экологическая функция",
              ],
              correctOrder: [0, 1, 2, 3],
            },
          },
        ],
      },
      {
        slug: "tgp-origin-theories",
        title: "Теории происхождения государства",
        summary:
          "Сравнение теологических, патриархальных, договорных и насильственных теорий.",
        order: 3,
        content: {
          sections: [
            {
              heading: "Главные подходы",
              body: "В теории происхождения государства выделяются теологическая, патриархальная, договорная и насильственная концепции.",
            },
          ],
        } satisfies Prisma.JsonObject,
        tasks: [
          {
            kind: TaskKind.MULTIPLE_CHOICE,
            prompt: "Кто является автором договорной теории происхождения государства?",
            order: 1,
            payload: {
              options: [
                "Фома Аквинский",
                "Жан-Жак Руссо",
                "Карл Маркс",
                "Георг Гегель",
              ],
              correctIndex: 1,
            },
          },
        ],
      },
    ],
  },
  {
    title: "Право и правовая система",
    description:
      "Источники права, структура правовой системы и навигация по нормативным актам.",
    order: 2,
    lessons: [
      {
        slug: "tgp-law-concepts",
        title: "Понятие права",
        summary:
          "Разбираем признаки, функции и значение права в регулировании общественных отношений.",
        order: 1,
        content: {
          sections: [
            {
              heading: "Определение права",
              body: "Право — система общеобязательных норм, установленных или санкционированных государством.",
            },
          ],
        } satisfies Prisma.JsonObject,
        tasks: [
          {
            kind: TaskKind.FILL_IN,
            prompt: "Укажите два ключевых признака права:",
            order: 1,
            payload: {
              placeholders: 2,
              acceptableAnswers: [
                ["общеобязательность", "общая обязательность"],
                ["формальная определённость", "формальная определенность"],
              ],
            },
          },
        ],
      },
      {
        slug: "tgp-sources-of-law",
        title: "Источники права",
        summary:
          "Конституция, законы, подзаконные акты и юридический прецедент в сравнительной перспективе.",
        order: 2,
        content: {
          sections: [
            {
              heading: "Основные источники",
              items: [
                "Нормативно-правовой акт",
                "Правовой прецедент",
                "Нормативный договор",
              ],
            },
          ],
        } satisfies Prisma.JsonObject,
        tasks: [
          {
            kind: TaskKind.MULTIPLE_CHOICE,
            prompt: "Какой источник права является доминирующим в РФ?",
            order: 1,
            payload: {
              options: [
                "Правовой прецедент",
                "Административный обычай",
                "Нормативно-правовой акт",
                "Религиозные тексты",
              ],
              correctIndex: 2,
            },
          },
        ],
      },
      {
        slug: "tgp-legal-system",
        title: "Правовая система Российской Федерации",
        summary:
          "Структура правовой системы и взаимодействие различных отраслей права.",
        order: 3,
        content: {
          sections: [
            {
              heading: "Система законодательства",
              body: "Включает Конституцию, федеральные конституционные законы, федеральные законы, региональные нормативные акты.",
            },
          ],
        } satisfies Prisma.JsonObject,
        tasks: [
          {
            kind: TaskKind.TRUE_FALSE,
            prompt: "Региональный закон может противоречить федеральному закону.",
            order: 1,
            payload: {
              correct: false,
              explanation:
                "В соответствии с Конституцией РФ региональные законы не могут противоречить федеральным.",
            },
          },
        ],
      },
    ],
  },
];

async function resetDatabase() {
  await prisma.$transaction([
    prisma.authenticator.deleteMany(),
    prisma.verificationToken.deleteMany(),
    prisma.session.deleteMany(),
    prisma.account.deleteMany(),
    prisma.userPurchase.deleteMany(),
    prisma.shopItem.deleteMany(),
    prisma.userDailyChallenge.deleteMany(),
    prisma.dailyChallenge.deleteMany(),
    prisma.dailyGoalLog.deleteMany(),
    prisma.streakEvent.deleteMany(),
    prisma.xpEvent.deleteMany(),
    prisma.lessonProgress.deleteMany(),
    prisma.lessonTask.deleteMany(),
    prisma.lesson.deleteMany(),
    prisma.courseEnrollment.deleteMany(),
    prisma.courseModule.deleteMany(),
    prisma.course.deleteMany(),
    prisma.user.deleteMany(),
  ]);
}

async function seed() {
  await resetDatabase();

  const passwordHash = await bcrypt.hash("admin123", 12);

  const course = await prisma.course.create({
    data: {
      slug: "tgp",
      title: "Теория государства и права",
      description:
        "Базовый курс по ТГП с игровой прогрессией, материалами и практическими заданиями.",
      icon: "gavel",
      isPublished: true,
      order: 1,
      modules: {
        create: modulesSeed.map((module) => ({
          title: module.title,
          description: module.description,
          order: module.order,
          isPublished: true,
          lessons: {
            create: module.lessons.map((lesson) => ({
              slug: lesson.slug,
              title: lesson.title,
              summary: lesson.summary,
              content: lesson.content,
              order: lesson.order,
              xpReward: 25,
              status: LessonStatus.PUBLISHED,
              tasks: {
                create: lesson.tasks.map((task, index) => ({
                  kind: task.kind,
                  prompt: task.prompt,
                  order: task.order ?? index + 1,
                  payload: task.payload,
                })),
              },
            })),
          },
        })),
      },
    },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: { orderBy: { order: "asc" } },
        },
      },
    },
  });

  const firstModule = course.modules[0];
  const firstLesson = firstModule.lessons[0];

  const admin = await prisma.user.create({
    data: {
      email: "admin@lex.local",
      name: "Lex Admin",
      passwordHash,
      role: UserRole.ADMIN,
      locale: "ru",
      timeZone: "Europe/Moscow",
      xp: 120,
      coins: 180,
      streakCount: 7,
      longestStreak: 12,
      dailyGoal: 20,
      currentCourseId: course.id,
    },
  });

  const author = await prisma.user.create({
    data: {
      email: "author@lex.local",
      name: "Lex Author",
      passwordHash,
      role: UserRole.AUTHOR,
      locale: "ru",
      timeZone: "Europe/Moscow",
      xp: 45,
      coins: 60,
    },
  });

  const learner = await prisma.user.create({
    data: {
      email: "learner@lex.local",
      name: "Lex Learner",
      passwordHash,
      role: UserRole.LEARNER,
      locale: "ru",
      timeZone: "Europe/Moscow",
      xp: 10,
      coins: 20,
      currentCourseId: course.id,
    },
  });

  await prisma.courseEnrollment.create({
    data: {
      userId: admin.id,
      courseId: course.id,
      level: 1,
      xp: 120,
      coins: 80,
      progressPercent: 35,
      streakCount: admin.streakCount,
      lastActivityAt: new Date(),
      currentModuleId: firstModule.id,
      currentLessonId: firstLesson.id,
    },
  });

  await prisma.courseEnrollment.create({
    data: {
      userId: learner.id,
      courseId: course.id,
      level: 1,
      xp: 10,
      coins: 20,
      progressPercent: 10,
      streakCount: 2,
      lastActivityAt: new Date(),
      currentModuleId: firstModule.id,
      currentLessonId: firstLesson.id,
    },
  });

  await prisma.lessonProgress.create({
    data: {
      userId: admin.id,
      lessonId: firstLesson.id,
      status: LessonProgressStatus.COMPLETED,
      attempts: 1,
      score: 100,
      stars: 3,
      xpEarned: 25,
      completedAt: new Date(),
      lastAttemptAt: new Date(),
    },
  });

  const xpEvent = await prisma.xpEvent.create({
    data: {
      userId: admin.id,
      courseId: course.id,
      lessonId: firstLesson.id,
      amount: 25,
      reason: XpReason.LESSON_COMPLETE,
    },
  });

  await prisma.streakEvent.createMany({
    data: [
      {
        userId: admin.id,
        day: new Date("2025-10-18T00:00:00Z"),
        type: StreakEventType.INCREMENT,
        delta: 1,
      },
      {
        userId: admin.id,
        day: new Date("2025-10-19T00:00:00Z"),
        type: StreakEventType.INCREMENT,
        delta: 1,
      },
    ],
  });

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  await prisma.dailyGoalLog.create({
    data: {
      userId: admin.id,
      goal: 20,
      achieved: true,
      xpEarned: xpEvent.amount,
      streakKept: true,
      date: startOfToday,
    },
  });

  const weeklyChallenge = await prisma.dailyChallenge.create({
    data: {
      type: DailyChallengeType.EARN_XP,
      target: 100,
      rewardXp: 50,
      rewardCoins: 40,
      startsAt: startOfToday,
      endsAt: new Date(startOfToday.getTime() + 4 * 24 * 60 * 60 * 1000),
      courseId: course.id,
    },
  });

  await prisma.userDailyChallenge.create({
    data: {
      userId: admin.id,
      challengeId: weeklyChallenge.id,
      status: DailyChallengeStatus.PENDING,
      progress: 25,
    },
  });

  await prisma.shopItem.createMany({
    data: [
      {
        slug: "streak-shield",
        title: "Щит серии",
        description:
          "Сохраняет текущую серию даже при пропуске одного дня. Активируется автоматически.",
        category: ShopItemCategory.BOOSTER,
        status: ShopItemStatus.PUBLISHED,
        cost: 200,
        stock: 0,
        isUnlimited: true,
      },
      {
        slug: "lexy-golden-robe",
        title: "Золотая мантия Lexy",
        description:
          "Праздничный облик талисмана для особых событий и финалов модулей.",
        category: ShopItemCategory.COSMETIC,
        status: ShopItemStatus.PUBLISHED,
        cost: 320,
        stock: 50,
        isUnlimited: false,
      },
    ],
  });

  await prisma.userPurchase.create({
    data: {
      userId: admin.id,
      itemId: (
        await prisma.shopItem.findUniqueOrThrow({ where: { slug: "streak-shield" } })
      ).id,
      quantity: 1,
    },
  });

  console.log("Database seeded successfully with core Lex Moscua data.");
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seeding failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
