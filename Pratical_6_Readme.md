# Practical 6 – Authentication

This project secures a REST API using **email/password authentication** and **JWT-based authorization** in a **Hono** backend application written in **TypeScript** with a **PostgreSQL** database managed by **Prisma ORM**.

### Getting Started

#### 1. Clone and Install

```bash
git clone https://github.com/rubcstswe/web102-hono-auth-jwt-prisma-forked.git
cd web102-hono-auth-jwt-prisma-forked
bun install
```

#### 2. Set Up Prisma

```bash
bunx prisma db push
bunx prisma generate
```

## Authentication Flow

### User Registration (`/register`)

* Accepts email and password
* Hashes password using `Bun.password.hash()`
* Stores hashed password in the database
* Creates a new account with a default balance

**POST** `/register`

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### User Login (`/login`)

* Verifies password using `Bun.password.verify()`
* Returns a JWT token signed with a secret

**POST** `/login`

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

**Response**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## Authorization

### JWT-Protected Routes

* Protected endpoints use `jwt()` middleware from Hono
* Token is sent in the `Authorization` header

**GET** `/protected/account/balance`

**Request Header**

```
Authorization: Bearer JWT_TOKEN
```

**Response**

```json
{
  "data": {
    "Account": [
      {
        "balance": 0,
        "id": "75a34064-f8c4-4a7e-90dd-4958c452fbf4"
      }
    ]
  }
}
```

## Prisma Models

```ts
model User {
  id           String    @id @default(uuid())
  email        String    @unique
  hashedPassword String
  Account      Account[]
}

model Account {
  id      String @id @default(uuid())
  userId  String
  user    User   @relation(fields: [userId], references: [id])
  balance Int    @default(0)
}
```

## Project Structure

```
src/
├── index.ts         # Hono API logic
├── lib/
│   └── prisma.ts    # Prisma client instance
├── middleware/
│   └── auth.ts      # JWT middleware
└── prisma/
    └── schema.prisma
```

## Tech Stack

* [Hono](https://hono.dev/) – Fast, modern web framework
* [Prisma ORM](https://prisma.io) – Type-safe database toolkit
* [PostgreSQL](https://www.postgresql.org/) – Relational database
* [Bun](https://bun.sh/) – All-in-one JavaScript runtime
* JWT for authentication and authorization

