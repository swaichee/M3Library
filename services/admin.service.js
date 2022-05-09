const Book = require("../models/book");

module.exports = {
  // Return all the vehicles including the association model: driver.
  vehicle: async () => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    const vehicles = await Vehicle.findAll({
      include: Driver,
      order: [["driverId", "ASC"]],
    });

    // error handling
    if (!vehicles) {
      result.status = 404;
      result.message = `Vehicle list is empty`;
      return result;
    }

    result.status = 200;
    result.message = "List of vehicles:";
    result.data = vehicles;

    return result;
  },
};
