const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const About =require("../model/aboutModel");

dotenv.config({ path: "../config.env" });
//console.log(process.env);

mongoose.connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB Server connected"))
  .catch(err => {
    console.error("Error on connecting the MongoDB server:", err.message);
  });

// IMPORT DATA

const jsonAbout = JSON.parse(fs.readFileSync(`${__dirname}/about.json`, "utf-8"));

const importAbout = async () => {
  try {
    await About.create(jsonAbout);
    console.log("About successfully imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA
const deleteAbout = async () => {
  try {
    await About.deleteMany();
    console.log("About successfully deleted.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importAbout();
} else if (process.argv[2] === "--delete") {
  deleteAbout();
}
