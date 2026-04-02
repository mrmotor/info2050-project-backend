// src/application/likeService.js
const Like = require('../domain/like');

exports.toggleLike = async (userId, postId) => {
    const existing = await Like.findOne({ userId, postId });

    if (existing) {
        await existing.deleteOne();
        return { liked: false };
    }

    await Like.create({ userId, postId });
    return { liked: true };
};