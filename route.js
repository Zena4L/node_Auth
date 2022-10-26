const express = require("express");

const route = express.Router();

const getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello",
  });
};

route.route("/test").get(getUser);
module.exports = route;
