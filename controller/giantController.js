const Giant = require("../model/giantModel");
exports.getGiant = async (req, res, next) => {
 let giant;
 try {
  giant = await Giant.find();
 //console.log("giant", JSON.stringify(giant));

/*  連接Postman 須把此打開 */
//  res.status(200).json({
//     status: "success",
//     length: giant.length,
//     data: giant
//     });
 /* 連接網頁須把這裡打開 */
    res.render("giant", {
    data: giant,
    title1: "GD",
    title2: "Giant"
    });
   
 } catch (err) {
 console.log(err);
 }
};

// 實作READ，讀取⼀筆

exports.getGiantById = async (req, res, next) => {
    let giant;
    try {
      giant = await Giant.findById(req.params.id);
    //console.log("giant",JSON.stringify(giant));
    res.status(200).json({
    status: "success",
    data: giant
    });
    } catch (err) {
    console.log(err);
    }
    };
    
// 實作刪除 DELETE

exports.deleteGiant = async (req, res, next) => {
    try {
    //console.log("deleteGiant", req.params.id);
    await Giant.findByIdAndDelete(req.params.id);
    res.status(200).json({
    status: "success",
    data: null
    });
    } catch (err) {
    console.log(err);
    }
   };

// 實作修改  UPDATE  

exports.updateGiant = async (req, res, next) => {
    try {
    //console.log("updateGiant", req.params.id);
    await Giant.findByIdAndUpdate(req.params.id, req.body, {
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
   
// 實作修改  CREATE

exports.createGiant = async (req, res, next) => {
    try {
      const newGiant= await Giant.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          about: newGiant
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "Invalid data sent"
      });
    }
  };   