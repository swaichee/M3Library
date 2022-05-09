const express = require("express");
const { testConn } = require("../config/db");
const Book = require("../models/book");
const { sequelize } = require("../models/book");

/*
// Import
const AdminController = require("../controllers/admin.controller");
// Instantiate the class
const adminController = new AdminController();
*/
const router = express.Router();

router.get("/admin", (req, res) => {
  return res.send("You have called a admin route");
});

async function initiate() {
  if (!(await testConn())) {
    return;
  }

  await Book.sync({ alter: true });
}
initiate();
//GET /admin/setup
// Return all the vehicles including the association model: driver.

//router.post("/admin/setup", adminController.setup);

module.exports = router;
