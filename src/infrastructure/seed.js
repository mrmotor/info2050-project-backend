const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../domain/user');
const Post = require('../domain/post');
const Comment = require('../domain/comment');

const seedDatabase = async () => {
    console.log('Checking database...');

    const userCount = await User.countDocuments();

    // If already seeded → skip
    if (userCount > 0) {
        console.log('Database already seeded');
        return;
    }

    console.log('Seeding database...');

    // ============================
    // 1. CREATE USERS
    // ============================
    const users = await User.insertMany([
        {
            email: 'admin@test.com',
            password: await bcrypt.hash('123456', 10),
            role: 'Admin'
        },
        {
            email: 'author1@test.com',
            password: await bcrypt.hash('123456', 10),
            role: 'Author'
        },
        {
            email: 'author2@test.com',
            password: await bcrypt.hash('123456', 10),
            role: 'Author'
        },
        {
            email: 'user1@test.com',
            password: await bcrypt.hash('123456', 10),
            role: 'User'
        },
        {
            email: 'user2@test.com',
            password: await bcrypt.hash('123456', 10),
            role: 'User'
        }
    ]);

    const authors = users.filter(u => u.role === 'Author');

    // ============================
    // 2. CREATE POSTS
    // ============================
    const posts = [];

    for (let i = 1; i <= 10; i++) {
        const author = authors[i % authors.length];

        const post = await Post.create({
            title: `Sample Post ${i}`,
            content: `This is the content of sample post number ${i}. It contains professional insights about technology and society.`,
            authorId: author._id
        });

        posts.push(post);
    }

    // ============================
    // 3. CREATE COMMENTS
    // ============================
    for (const post of posts) {
        const randomCommentsCount = Math.floor(Math.random() * 2) + 2; // 2-3

        for (let i = 0; i < randomCommentsCount; i++) {
            const user = users[Math.floor(Math.random() * users.length)];

            await Comment.create({
                content: `This is a comment ${i + 1} on post "${post.title}"`,
                userId: user._id,
                postId: post._id
            });
        }
    }

    console.log('Database seeded successfully');
};

module.exports = seedDatabase;