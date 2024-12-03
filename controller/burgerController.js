const Burger = require("../model/burgerModel");

exports.getBurger = async (req, res, next) => {
 let burger;
 try {
 burger = await Burger.find();
//  console.log("burger", JSON.stringify(burger));

/*  連接Postman 須把此打開 */
// res.status(200).json({
//    status: "success",
//    length: burger.length,
//    data: burger
//    });

  //註解 res.json(burger)可以抓到前端資料 
  // res.json(burger);

 /* 連接網頁須把這裡打開 */
res.render("burger", {
   data: burger,
   title: "GD Burger"
   });
  

  
 } catch (err) {
 console.log(err);
 }
};


// 實作READ，讀取全部
exports.getBurgerById = async (req, res, next) => {
   let burger;
   try {
   burger = await Burger.findById(req.params.id);
   //console.log("burger",JSON.stringify(burger));
   res.status(200).json({
   status: "success",
   data: burger
   });
   } catch (err) {
   console.log(err);
   }
   };
   
//實作刪除 DELETE
exports.deleteBurger = async (req, res, next) => {
   try {
   //console.log("deleteBurger", req.params.id);
   await Burger.findByIdAndDelete(req.params.id);
   res.status(200).json({
   status: "success",
   data: null
   });
   } catch (err) {
   console.log(err);
   }
  };

//   實作修改  UPDATE
exports.updateBurger = async (req, res, next) => {
   try {
   //console.log("updateBurger", req.params.id);
   await Burger.findByIdAndUpdate(req.params.id, req.body, {
   new: true
   });
   res.status(200).json({
   status: "success",
   data: null
   });
   } catch (err) {
   console.log(err);
   }
  };
  
//   實作修改  CREATE
  exports.createBurger = async (req, res, next) => {
   try {
     const newBurger = await Burger.create(req.body);
     res.status(201).json({
       status: "success",
       data: {
         burger: newBurger
       }
     });
   } catch (err) {
     res.status(400).json({
       status: "fail",
       message: "Invalid data sent"
     });
   }
 };
 