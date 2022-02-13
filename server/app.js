const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("./db/mongoose.js");
app.use("/uploads", express.static("uploads"));
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messagesRoute = require("./routes/messages");

// middleware
app.use(cors());
app.use(express.json());
const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messagesRoute);

const PORT = process.env.PORT || 5000;

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// app.listen(PORT, () => {
//   console.log(`listing on port ${PORT}`);
// });

module.exports = app;
