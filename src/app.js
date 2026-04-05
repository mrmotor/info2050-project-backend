const express = require("express");
const app = express();
const logger = require("./middleware/logger");

app.use(express.json());

app.use((req, res, next) => {
  logger.http(`${req.method} ${req.url}`);
  next();
});
app.use(require("./middleware/rateLimit"));

app.use("/api/post", require("./routes/post.routes"));
app.use("/api/comment", require("./routes/comment.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/upload", require("./routes/upload.routes"));
app.use("/api/admin", require("./routes/admin.routes"));
// app.use('/api/likes', require('./api/likeRoutes'));
// app.use('/api/comments', require('./api/commentRoutes'));

module.exports = app;
