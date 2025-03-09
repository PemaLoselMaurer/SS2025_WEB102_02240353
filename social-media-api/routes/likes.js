const express = require("express");
const { likePost, unlikePost } = require("../controllers/likeController");

const router = express.Router();

// Like a post
router.post('/posts/:id/like', likePost);

// Unlike a post
router.delete('/posts/:id/like', unlikePost);

module.exports = router;
