# Lex Moscua - Legal Learning Platform

A Duolingo-like platform for learning law, built with Express, Prisma, PostgreSQL, React, and TypeScript.

## Prerequisites

- Node.js 18+
- Docker Desktop (for PostgreSQL)
- npm or yarn

## Quick Start

### 1. Start PostgreSQL Database

```bash
docker run -d --name lexmoscua-postgres \
  -e POSTGRES_USER=lex \
  -e POSTGRES_PASSWORD=lex \
  -e POSTGRES_DB=lex \
  -p 5432:5432 \
  postgres:latest
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Run database migrations
npm run migrate

# Seed sample data (admin user + sample module/lesson)
npm run seed

# Start backend server
npm run dev
```

Backend will run on `http://localhost:3000`

**Default Admin Credentials:**
- Email: `admin@lexmoscua.com`
- Password: `admin123`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start frontend dev server
npm run dev
```

Frontend will run on `http://localhost:5173`

## Project Structure

```
lex-moscua/
├── backend/
│   ├── app/
│   │   ├── controllers/    # API controllers
│   │   ├── middleware/     # Auth & other middleware
│   │   ├── routes/         # API routes
│   │   ├── prisma.ts       # Prisma client  
│   │   └── index.ts        # Express app entry
│   ├── prisma/
│   │   ├── schema.prisma   # Database schema
│   │   └── seed.ts         # Seed data script
│   ├── .env                # Environment variables
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   ├── App.tsx         # Main app component
    │   ├── main.tsx        # Entry point
    │   └── index.css       # Global styles
    └── package.json

## API Endpoints

### Public Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Student Routes (Authenticated)
- `GET /api/modules` - List all modules
- `GET /api/modules/:id` - Get module details
- `GET /api/lessons/:id` - Get lesson details
- `GET /api/lessons/:id/exercises` - Get exercises for a lesson
- `POST /api/exercises/:id/answer` - Submit exercise answer
- `GET /api/user/progress` - Get user progress

### Admin Routes (Admin only)
- `POST /api/admin/modules` - Create module
- `POST /api/admin/lessons` - Create lesson
- `POST /api/admin/exercises` - Create exercise

## Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://lex:lex@localhost:5432/lex?schema=public"
JWT_SECRET="supersecretkey"
PORT=3000
```

## Features

- ✅ User authentication (JWT)
- ✅ Role-based access (Student/Admin)
- ✅ Module-based learning structure
- ✅ Multiple exercise types (Single choice, Multi choice, True/False, Fill-in-blank)
- ✅ XP and progress tracking
- ✅ Streak system
- ✅ Admin panel for content creation
- ✅ Duolingo-like UI

## Tech Stack

**Backend:**
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcryptjs for password hashing

**Frontend:**
- React 18
- TypeScript
- Vite
- React Router
- Axios
- Lucide React (icons)
- Vanilla CSS

## Development

### Running Backend in Watch Mode
```bash
cd backend
npm run dev
```

### Running Frontend in Watch Mode
```bash
cd frontend
npm run dev
```

### Database Commands
```bash
# Create migration
npx prisma migrate dev --name migration_name

# Generate Prisma client
npx prisma generate

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database
npx prisma migrate reset
```

## Sample Data

The seed script creates:
- Admin user (`admin@lexmoscua.com` / `admin123`)
- Sample module: "Introduction to Law"
- Sample lesson: "What is Law?"
- 2 sample exercises

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running: `docker ps`
- Check connection string in `.env`
- Verify database is accessible: `docker exec -it lexmoscua-postgres psql -U lex -d lex`

### Port Already in Use
- Backend (3000): Change `PORT` in `.env`
- Frontend (5173): Modify `vite.config.ts`
- PostgreSQL (5432): Change port mapping in docker command

## Next Steps

- [ ] Add more exercise types (Open text with manual grading)
- [ ] Implement daily goals and achievements
- [ ] Add user profile customization
- [ ] Create more learning modules
- [ ] Add statistics and analytics dashboard
- [ ] Implement peer comparison features

## License

ISC
