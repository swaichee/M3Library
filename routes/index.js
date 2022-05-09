const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.

// Import libraries for handling HTTP errors
const createError = require("http-errors");

/* GET home page. */
app.get("/", (req, res) => {
  let info = {};
  info.message = "Welcome to our Library!";
  res.json(info);
});

const adminRoutes = require("./admin.routes");

//const protectedRoutes = require("./protected.routes");
//const generalRoutes = require("./general.routes");

app.use(adminRoutes);
//app.use(protectedRoutes);
//app.use(generalRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.json(createError(404));
});

module.exports = app;

/**
 * 


const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.

const protectedRoutes = require("./protected.routes");
const generalRoutes = require("./general.routes");

app.use(protectedRoutes);
app.use(generalRoutes);

module.exports = app;
*/
