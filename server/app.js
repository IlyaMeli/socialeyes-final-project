const express = require("express");
const app = express();
const cors = require("cors");
require("./db/mongoose.js");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

// middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});