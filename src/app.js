const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./middleware/logger'));
app.use(require('./middleware/rateLimit'));

// app.use('/api/posts', require('./api/postRoutes'));
// app.use('/api/likes', require('./api/likeRoutes'));
// app.use('/api/comments', require('./api/commentRoutes'));

module.exports = app;
