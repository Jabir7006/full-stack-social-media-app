const express = require("express")
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require("./routers/userRoute");
const createError = require("http-errors");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);


// client error handling //

app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

//server error handling //

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
