const adminSerivce = require("../services/admin.service");

//GET /general/vehicle
// Return all the vehicles including the association model: driver.
class AdminController {
  async book(req, res) {
    const { status, data, message } = await adminSerivce.setup();
    res.status(status);
    res.json({ message, data });
  }
}

module.exports = AdminController;
