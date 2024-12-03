const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Data =require("../model/burgerModel");

dotenv.config({ path: "../config.env" });
//console.log(process.env);

mongoose.connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB Server connected"))
  .catch(err => {
    console.error("Error on connecting the MongoDB server:", err.message);
  });

// IMPORT DATA

const jsonData = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const importData = async () => {
  try {
    await Data.create(jsonData);
    console.log("Data successfully imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA
const deleteData = async () => {
  try {
    await Data.deleteMany();
    console.log("Data successfully deleted.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
