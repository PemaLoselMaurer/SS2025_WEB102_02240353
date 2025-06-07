# Practical 1 – RESTful API with Express.js

This project involves designing and implementing RESTful API endpoints for a social media platform using **Node.js** and **Express.js**. It includes proper HTTP methods, status codes, content negotiation, and basic API documentation.

### 1. Install Dependencies

```bash
npm install express morgan cors helmet
npm install nodemon --save-dev
```

### 2. Run the Development Server

```bash
npm run dev
```

## Project Setup

### Initial Setup

Created using:

```bash
mkdir social-media-api
cd social-media-api
npm init -y
```

Configured with:

* Express.js
* Middleware: Morgan, CORS, Helmet
* Development tools: Nodemon
* Folder structure: `controllers`, `routes`, `middleware`, `config`, `utils`

### Folder Structure

```
social-media-api/
├── controllers/
│   ├── userController.js
│   ├── postController.js
│   └── ... (comments, likes, followers)
├── routes/
│   ├── users.js
│   ├── posts.js
│   └── ... (comments, likes, followers)
├── middleware/
│   ├── errorHandler.js
│   ├── async.js
│   └── formatResponse.js
├── utils/
│   ├── errorResponse.js
│   └── mockData.js
├── public/
│   └── docs.html
├── server.js
├── .env
├── .gitignore
└── package.json
```

## API Design & Implementation

### Endpoints Overview

* **Users**

  * `GET /users`: List users
  * `POST /users`: Create user
* **Posts**

  * `GET /posts`: List posts
  * `GET /posts/:id`: Get a specific post
  * `POST /posts`: Create post
  * `PUT /posts/:id`: Update post
  * `DELETE /posts/:id`: Delete post
* **Others**: Similar endpoints for `comments`, `likes`, `followers`

### Content Negotiation

Implemented in `formatResponse.js` middleware:

* Checks `Accept` header (e.g., JSON, XML)
* Formats responses accordingly

### Error Handling

Custom middleware:

* `errorHandler.js`: Catches and formats errors
* `errorResponse.js`: Utility for consistent error structure
* `async.js`: Wraps async route handlers to catch errors

## Mock Data & Documentation

### Mock Data

Created in `utils/mockData.js` for testing endpoints before DB integration.

### API Docs

Accessible via:

```
GET /docs.html
```

Located in `public/docs.html`, provides simple HTML-based API documentation.

## Final Steps

### Testing

* Test all routes using Postman or Insomnia
* Verify correct status codes and response structures
* Test content negotiation by modifying request headers

### Start Server

```bash
npm run dev
```
