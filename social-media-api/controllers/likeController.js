const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const { posts, users, likes, follows, comments } = require('../utils/mockData');

// @desc    Like a post
// @route   POST /api/posts/:id/like
// @access  Private
exports.likePost = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    const post = posts.find(post => post.id === req.params.id);
    if (!post) {
        return next(new ErrorResponse(`Post not found with id of ${req.params.id}`, 404));
    }

    const alreadyLiked = likes.some(like => like.post_id === req.params.id && like.user_id === userId);
    if (alreadyLiked) {
        return next(new ErrorResponse('You have already liked this post', 400));
    }

    likes.push({ post_id: req.params.id, user_id: userId });

    res.status(200).json({
        success: true,
        message: 'Post liked successfully'
    });
});

// @desc    Unlike a post
// @route   DELETE /api/posts/:id/like
// @access  Private
exports.unlikePost = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    const index = likes.findIndex(like => like.post_id === req.params.id && like.user_id === userId);
    if (index === -1) {
        return next(new ErrorResponse('You have not liked this post', 400));
    }

    likes.splice(index, 1);

    res.status(200).json({
        success: true,
        message: 'Post unliked successfully'
    });
});
