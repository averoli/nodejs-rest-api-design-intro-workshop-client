const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/user-routes");
const config = require("./config/config");

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  })
);

app.use(userRouter);

module.exports = app;
