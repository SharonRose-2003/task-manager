require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const taskRoutes = require("./routes/taskRoutes");
app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

app.use("/tasks", taskRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
