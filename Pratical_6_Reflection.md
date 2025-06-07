# Reflection – Practical 6: Secure REST API with Hono, Prisma, and JWT

## Documentation

### Concepts Applied:

* **Password Hashing:** Secured user credentials with bcrypt-compatible hashing using Bun’s native functions.
* **JWT Authentication:** Issued signed tokens for stateless user sessions.
* **Authorization Middleware:** Protected routes using Hono’s built-in JWT middleware.
* **Prisma ORM:** Modeled users and accounts and connected them through 1\:N relationships.
* **RESTful API Design:** Implemented logical endpoints for register, login, and account access.

## Reflection

### What I Learned:

* The critical distinction between **authentication** (identity) and **authorization** (permissions).
* How to implement secure password authentication using bcrypt hashing in Bun.
* Issuing and verifying JWTs to protect sensitive API endpoints in a stateless way.
* Writing clean and modular route/middleware logic in Hono.
* How Prisma simplifies database schema design and querying while ensuring type safety.

### Challenges Faced:

#### 1. JWT Payload and TypeScript Typing

Integrating JWT verification into Hono’s context type required careful typing to ensure payload safety. The solution involved extending Hono’s context type with `JwtVariables`.


#### 2. Prisma Constraint Errors

Initially, duplicate email registrations threw generic errors. Using `PrismaClientKnownRequestError` allowed for precise and user-friendly messages like "Email already exists".


### Key Takeaways:

* **JWT** is powerful but must be securely managed (never hard-code secrets in code).
* **Hono** offers a minimal, expressive API for fast RESTful services.
* Using **Bun** drastically improved performance in both hashing and server responsiveness.
* **Prisma** removes most of the overhead in managing relational data and keeps code clean.

