/*// Import index route
let index = require("./routes/index");

// Text Express to use our index module for root URL
*/

const router = require("./routes");

const PORT = 3000;

router.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
