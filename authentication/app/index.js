require("dotenv").config();

const express = require("express");
const cors = require("cors");
const errorHandlerMiddleware = require("./errors/errorHandlerMiddleware");

const app = express();

const routers = require("./routers");

app.use(cors("*"));

const options = { extended: false };
app.use(express.json(options));

app.use(routers);

app.use(errorHandlerMiddleware);

app.set("base_url", process.env.BASE_URL);
app.set("port", process.env.PORT);

module.exports = app;
