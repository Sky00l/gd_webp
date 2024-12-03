var express = require("express");
var router = express.Router();

const burgerController = require("../controller/burgerController");
const aboutController = require("../controller/aboutController");
const chefController = require("../controller/chefController");
const giantController = require("../controller/giantController");
const subwayController = require("../controller/subwayController");


// Burger
router.post("/burger/create",burgerController.createBurger);
router.get("/burger",burgerController.getBurger);
router.get("/burger/:id",burgerController.getBurgerById);
router.patch("/burger/update/:id",burgerController.updateBurger);
router.delete("/burger/delete/:id",burgerController.deleteBurger);


// About
router.post("/about/create",aboutController.createAbout);
router.get("/about",aboutController.getAbout);
router.get("/about/:id",aboutController.getAboutById);
router.patch("/about/update/:id",aboutController.updateAbout);
router.delete("/about/delete/:id",aboutController.deleteAbout);
router.get("/about",aboutController.getAbout);

// Chef
router.get("/chef",chefController.getChef);
router.post("/chef/create",chefController.createChef);
router.get("/chef",chefController.getChef);
router.get("/chef/:id",chefController.getChefById);
router.patch("/chef/update/:id",chefController.updateChef);
router.delete("/chef/delete/:id",chefController.deleteChef);

// Menu/Giant
router.get("/giant",giantController.getGiant);
router.post("/giant/create",giantController.createGiant);
router.get("/giant",giantController.getGiant);
router.get("/giant/:id",giantController.getGiantById);
router.patch("/giant/update/:id",giantController.updateGiant);
router.delete("/giant/delete/:id",giantController.deleteGiant);


// Menu/Subway
router.get("/subway",subwayController.getSubway);
router.post("/subway/create",subwayController.createSubway);
router.get("/subway",subwayController.getSubway);
router.get("/subway/:id",subwayController.getSubwayById);
router.patch("/subway/update/:id",subwayController.updateSubway);
router.delete("/subway/delete/:id",subwayController.deleteSubway);


router.get("/giant", function(req, res, next) {
 res.render("giant", { title: "GD giant" });
});

router.get("/subway", function(req, res, next) {
  res.render("subway", { title: "GD subway" });
 });


module.exports = router;