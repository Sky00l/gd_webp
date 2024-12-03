const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Chef =require("../model/chefModel");

dotenv.config({ path: "../config.env" });
//console.log(process.env);

mongoose.connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB Server connected"))
  .catch(err => {
    console.error("Error on connecting the MongoDB server:", err.message);
  });

// IMPORT DATA

const jsonChef = JSON.parse(fs.readFileSync(`${__dirname}/chef.json`, "utf-8"));

const importChef = async () => {
  try {
    await Chef.create(jsonChef);
    console.log("Chef successfully imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA
const deleteChef = async () => {
  try {
    await Chef.deleteMany();
    console.log("Chef successfully deleted.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importChef();
} else if (process.argv[2] === "--delete") {
  deleteChef();
}
