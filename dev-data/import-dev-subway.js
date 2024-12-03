const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Subway =require("../model/subwayModel");

dotenv.config({ path: "../config.env" });
//console.log(process.env);

mongoose.connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB Server connected"))
  .catch(err => {
    console.error("Error on connecting the MongoDB server:", err.message);
  });

// IMPORT DATA

const jsonSubway = JSON.parse(fs.readFileSync(`${__dirname}/subway.json`, "utf-8"));

const importSubway = async () => {
  try {
    await Subway.create(jsonSubway);
    console.log("Subway successfully imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA
const deleteSubway = async () => {
  try {
    await Subway.deleteMany();
    console.log("Subway successfully deleted.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importSubway();
} else if (process.argv[2] === "--delete") {
  deleteSubway();
  
}
