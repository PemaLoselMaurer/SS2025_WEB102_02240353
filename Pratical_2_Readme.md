# Practical 2 – TikTok REST API with Express.js

This project focuses on building the backend REST API for a TikTok-like application using **Node.js** and **Express.js**. It handles users, videos, comments, likes, and followers, enabling complete interaction between frontend and backend.

### 1. Install Dependencies

```bash
npm install express cors morgan body-parser dotenv
npm install --save-dev nodemon
```

### 2. Run the Development Server

```bash
npm run dev
```

## Project Setup

### Initial Setup

Created using:

```bash
mkdir -p server
cd server
npm init -y
```

Configured with:

* **Express** (Web framework)
* **CORS** (Cross-Origin Resource Sharing)
* **Morgan** (HTTP request logger)
* **Body-parser** (Request body parsing)
* **Dotenv** (Environment variable management)

### Folder Structure

```
server/
├── src/
│   ├── controllers/
│   │   ├── videoController.js
│   │   ├── userController.js
│   │   └── commentController.js
│   ├── models/
│   │   └── index.js
│   ├── routes/
│   │   ├── videos.js
│   │   ├── users.js
│   │   └── comments.js
│   ├── middleware/
│   └── utils/
│   ├── app.js
│   └── server.js
├── .env
└── package.json
```

## API Overview

### Resources & Endpoints

| Resource        | Endpoint              | Method         | Description                                  |
| --------------- | --------------------- | -------------- | -------------------------------------------- |
| Videos          | `/api/videos`         | GET/POST       | List or create videos                        |
| Videos          | `/api/videos/:id`     | GET/PUT/DELETE | View, update, or delete a specific video     |
| Comments        | `/api/comments`       | GET/POST       | List or create comments                      |
| Comments        | `/api/comments/:id`   | GET/PUT/DELETE | View, update, or delete a comment            |
| Users           | `/api/users`          | GET/POST       | List or create users                         |
| Users           | `/api/users/:id`      | GET/PUT/DELETE | View, update, or delete a specific user      |
| Likes/Followers | Various nested routes | GET/POST       | Like/unlike videos/comments, follow/unfollow |


## Testing the API

You can use **Postman** or **cURL** to test endpoints:

```bash
curl -X GET http://localhost:3000/api/users
curl -X GET http://localhost:3000/api/videos
curl -X GET http://localhost:3000/api/users/1/videos
curl -X GET http://localhost:3000/api/videos/1/comments
```