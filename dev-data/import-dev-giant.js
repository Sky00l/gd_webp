const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Giant =require("../model/giantModel");

dotenv.config({ path: "../config.env" });
//console.log(process.env);

mongoose.connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB Server connected"))
  .catch(err => {
    console.error("Error on connecting the MongoDB server:", err.message);
  });

// IMPORT DATA

const jsonGiant = JSON.parse(fs.readFileSync(`${__dirname}/giant.json`, "utf-8"));

const importGiant = async () => {
  try {
    await Giant.create(jsonGiant);
    console.log("Giant successfully imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA
const deleteGiant = async () => {
  try {
    await Giant.deleteMany();
    console.log("Giant successfully deleted.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importGiant();
} else if (process.argv[2] === "--delete") {
  deleteGiant();
}
