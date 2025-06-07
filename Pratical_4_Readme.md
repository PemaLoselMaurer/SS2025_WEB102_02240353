# Practical 4 – PostgreSQL Integration with Prisma ORM

This project connects the TikTok backend to a **PostgreSQL** database using **Prisma ORM**. It replaces in-memory data with persistent storage and introduces authentication, seed data, and database migrations.

### 1. Install Dependencies

```bash
npm install @prisma/client
npm install prisma --save-dev
npm install bcrypt jsonwebtoken
```

### 2. Setup Prisma and PostgreSQL

```bash
npx prisma init
```

### 3. Run Migrations & Seed

```bash
npx prisma migrate dev --name init
npm run seed
```

## Project Setup

### Folder Structure

```
server/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── src/
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── videoController.js
│   │   └── commentController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── lib/
│   │   └── prisma.js
│   ├── routes/
│   └── app.js
├── .env
└── package.json
```

## Database Integration

### PostgreSQL Setup

```sql
-- In terminal
sudo -u postgres psql

-- Create DB & user
CREATE DATABASE tiktok_db;
CREATE USER tiktok_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
```

### Prisma Configuration

```env
DATABASE_URL="postgresql://tiktok_user:your_password@localhost:5432/tiktok_db?schema=public"
```

## Authentication & Protected Routes

### JWT Auth

* Passwords hashed using `bcrypt`
* Tokens issued via `jsonwebtoken`
* Protected routes use `auth.js` middleware

### Environment Variables

```env
JWT_SECRET=yourverylongandsecurerandomsecret
JWT_EXPIRE=30d
```

## Seeding the Database

```bash
npm run seed
```

Creates:

* 10 users
* 50 videos
* 200 comments
* 300 likes
* 40 follow relationships

## API Testing

Use **Postman** to test:

* Register/Login
* Create video (with token)
* Like/follow features
* Query users/videos/comments

