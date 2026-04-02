const Post = require('../domain/post');

exports.getAllPosts = async () => {
    return await Post.find().populate('authorId');
};

exports.getPostById = async (id) => {
    return await Post.findById(id).populate('authorId');
};

exports.createPost = async (data, userId) => {
    return await Post.create({
        title: data.title,
        content: data.content,
        authorId: userId
    });
};

exports.updatePost = async (id, data, userId) => {
    const post = await Post.findById(id);

    if (!post) throw new Error('Post not found');

    // Only author can update
    if (post.authorId.toString() !== userId)
        throw new Error('Unauthorized');

    post.title = data.title ?? post.title;
    post.content = data.content ?? post.content;

    return await post.save();
};

exports.deletePost = async (id, userId, userRole) => {
    const post = await Post.findById(id);

    if (!post) throw new Error('Post not found');

    if (post.authorId.toString() !== userId && userRole !== 'Admin')
        throw new Error('Unauthorized');

    await post.deleteOne();
};