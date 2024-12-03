const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
// console.log(process.env);



mongoose.connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB Server connected"))
  .catch(err => console.log("Error on connecting the MongoDB server", err));

const app = require("./app");

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${process.env.PORT}`);
});