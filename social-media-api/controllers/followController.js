// @desc    Follow a user
// @route   POST /api/users/:id/follow
// @access  Private
exports.followUser = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    if (userId === req.params.id) {
        return next(new ErrorResponse('You cannot follow yourself', 400));
    }

    const userToFollow = users.find(user => user.id === req.params.id);
    if (!userToFollow) {
        return next(new ErrorResponse('User not found', 404));
    }

    const alreadyFollowing = follows.some(follow => follow.follower_id === userId && follow.following_id === req.params.id);
    if (alreadyFollowing) {
        return next(new ErrorResponse('You are already following this user', 400));
    }

    follows.push({ follower_id: userId, following_id: req.params.id });

    res.status(200).json({
        success: true,
        message: 'User followed successfully'
    });
});

// @desc    Unfollow a user
// @route   DELETE /api/users/:id/follow
// @access  Private
exports.unfollowUser = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    const index = follows.findIndex(follow => follow.follower_id === userId && follow.following_id === req.params.id);
    if (index === -1) {
        return next(new ErrorResponse('You are not following this user', 400));
    }

    follows.splice(index, 1);

    res.status(200).json({
        success: true,
        message: 'User unfollowed successfully'
    });
});
