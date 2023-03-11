console.log("Hello World");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5500;
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", require("./routes/taskRoutes.js"));

app.use(errorHandler);

app.listen(5500, () => console.log(`Server started on port ${port}`));
