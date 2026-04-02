const Comment = require('../domain/comment');

exports.getCommentsByPost = async (postId) => {
    return await Comment.find({ postId }).populate('userId');
};

exports.createComment = async (postId, content, userId) => {
    return await Comment.create({
        postId,
        content,
        userId
    });
};

exports.updateComment = async (id, content, userId) => {
    const comment = await Comment.findById(id);

    if (!comment) throw new Error('Comment not found');

    if (comment.userId.toString() !== userId)
        throw new Error('Unauthorized');

    comment.content = content;
    return await comment.save();
};

exports.deleteComment = async (id, userId, userRole) => {
    const comment = await Comment.findById(id);

    if (!comment) throw new Error('Comment not found');

    if (comment.userId.toString() !== userId && userRole !== 'Admin')
        throw new Error('Unauthorized');

    await comment.deleteOne();
};