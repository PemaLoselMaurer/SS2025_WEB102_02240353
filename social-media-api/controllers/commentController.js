const ErrorResponse = require('..//utils/errorResponse');
const asyncHandler = require('..//middleware/async');
const { comments  } = require('..//utils/mockData');

// @desc    Add a comment to a post
// @route   POST /api/posts/:id/comment
// @access  Private
exports.addComment = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    const post = posts.find(post => post.id === req.params.id);
    if (!post) {
        return next(new ErrorResponse(`Post not found with id of ${req.params.id}`, 404));
    }

    if (!req.body.text || req.body.text.trim() === '') {
        return next(new ErrorResponse('Comment text is required', 400));
    }

    const newComment = {
        id: (comments.length + 1).toString(),
        post_id: req.params.id,
        user_id: userId,
        text: req.body.text,
        created_at: new Date().toISOString()
    };

    comments.push(newComment);

    res.status(201).json({
        success: true,
        data: newComment
    });
});

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    const commentIndex = comments.findIndex(comment => comment.id === req.params.id && comment.user_id === userId);
    if (commentIndex === -1) {
        return next(new ErrorResponse('Comment not found or you are not authorized to delete it', 404));
    }

    comments.splice(commentIndex, 1);

    res.status(200).json({
        success: true,
        message: 'Comment deleted successfully'
    });
});
