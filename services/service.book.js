const { testConn } = require("./db");
const Book = require("../models/book");
const { sequelize } = require("../models/book");

//const vehicle

async function initiate() {
  if (!(await testConn())) {
    return;
  }

  // run the first time to sync the new column created using the code to the database
  await Book.sync({ alter: true });
  //await Driver.sync({ alter: true });
  //await ParkingHistories.sync({ alter: true });
  //await Carpark.sync({ alter: true });

  //await Vehicle.update({ driverId: 2 }, { where: { id: 2 } });

  /*const vehicles = await Vehicle.findAll();
  const drivers = await Driver.findAll();
  const histories = await ParkingHistories.findAll();
  const carparks = await Carpark.findAll();*/

  // create a new vehicle
  /*const newVehicle = await Vehicle.create({
    type: "Bike",
    car_plate_no: "DII9009",
  });

 

  newVehicle.type = "Super Bike";
  await newVehicle.save();*/

  // create a new driver
  /*const newDriver = await Driver.create({
    carLicenseNo: "RJ132012",
    fullName: "Joseph Tan",
  });
  await newDriver.save();*/

  /*console.table(JSON.parse(JSON.stringify(vehicles)));
  console.table(JSON.parse(JSON.stringify(drivers)));
  console.table(JSON.parse(JSON.stringify(histories)));
  console.table(JSON.parse(JSON.stringify(carparks)));

  const results = await Vehicle.findAll({ where: { id: 2 }, include: Driver });
*/

  /*
  // find vehicle info by driver's name
  const who = await Driver.findAll({
    where: { fullName: "Mary" },
    include: Vehicle,
  });

  // find vehicle's parking histories
  const history = await Vehicle.findAll({
    where: { id: 2 },
    include: ParkingHistories,
  });
  // find carpark info of each parking record

  const carparkInfo = await ParkingHistories.findAll({
    where: { carparkID: 1 },
    include: Carpark,
  });

  const carpark_parkingList = await Carpark.findAll({
    where: { id: 1 },
    include: ParkingHistories,
  });

  console.log("Query vehicle info of driver info of DriverId = 2");
  console.table(JSON.parse(JSON.stringify(results)));
  console.log("Query vehicle info with driver's name = Mary");
  console.table(JSON.parse(JSON.stringify(who)));
  console.log("Query parking history of vehicleID = 2");
  console.table(JSON.parse(JSON.stringify(history)));
  console.log("filter parking records of carparkId = 1 with carpark info");
  console.table(JSON.parse(JSON.stringify(carparkInfo)));
  console.log(
    "Query carpark table and list all its parking records of carparkID=1"
  );

  console.table(JSON.parse(JSON.stringify(carpark_parkingList)));
*/
  //
  //await newVehicle.destroy();
  // disconnect the database.
  //sequelize.close();
}

initiate();
