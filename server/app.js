const express = require("express");
const app = express();
const cors = require("cors");
require("./db/mongoose.js");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
