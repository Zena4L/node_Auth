const express = require("express");
const { model } = require("mongoose");
const morgan = require("morgan");
const mainRoute = require("./route");

const app = express();

app.use(morgan("dev"));

app.use("/", mainRoute);

module.exports = app;
