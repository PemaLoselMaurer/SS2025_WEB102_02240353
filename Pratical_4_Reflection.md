# Reflection – Practical 4: Connecting TikTok to PostgreSQL with Prisma ORM

---

## Documentation

### Concepts Applied:

* **PostgreSQL Setup:** Configured and connected a relational database to replace in-memory structures.
* **Prisma ORM:** Simplified database queries and migrations with Prisma's schema and client tools.
* **Authentication System:** Integrated secure login with `bcrypt` and JWT.
* **Seed Scripts:** Automated test data generation to simulate real-world app usage.
* **Protected Routes:** Implemented middleware to secure sensitive endpoints.

---

## Reflection

### What I Learned:

* How to set up and connect to a PostgreSQL database from a Node.js project.
* Defining and maintaining database schemas using Prisma's declarative modeling.
* Creating robust authentication with password encryption and token-based authorization.
* Writing seed scripts to quickly populate a test database.
* Using Prisma client for efficient, readable database queries across relationships.

### Challenges Faced:

#### 1. Environment & Prisma Configuration

Initial trouble with `.env` and `DATABASE_URL` formatting caused Prisma connection errors. This was fixed by ensuring the correct format and using `npx prisma db pull` to test the connection.


#### 2. Managing Complex Relationships

Fetching videos with user and comments required deeply nested queries. Prisma's `include` and `select` options helped simplify relational queries.


### Key Takeaways:

* ORM tools like Prisma improve developer productivity by reducing SQL boilerplate.
* Prisma’s migrations make it easy to version and evolve database schemas.
* Seed data scripts are invaluable for testing features like feeds, likes, and comments.
* Security practices like hashing and JWTs are critical for user-facing applications.
* Combining database persistence with REST API controllers enables production-level backend systems.


