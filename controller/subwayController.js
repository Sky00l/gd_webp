const Subway = require("../model/subwayModel");
exports.getSubway = async (req, res, next) => {
 let subway;
 try {
  subway = await Subway.find();
 //console.log("subway", JSON.stringify(subway));

/*  連接Postman 須把此打開 */
//  res.status(200).json({
//     status: "success",
//     length: subway.length,
//     data: subway
//     });
 /* 連接網頁須把這裡打開 */
    res.render("subway", {
    data: subway,
    title1: "GD",
    title2: "Subway"
    });
   
 } catch (err) {
 console.log(err);
 }
};

// 實作READ，讀取⼀筆

exports.getSubwayById = async (req, res, next) => {
    let subway;
    try {
      subway = await subway.findById(req.params.id);
    //console.log("subway",JSON.stringify(subway));
    res.status(200).json({
    status: "success",
    data: subway
    });
    } catch (err) {
    console.log(err);
    }
    };
    
// 實作刪除 DELETE

exports.deleteSubway = async (req, res, next) => {
    try {
    //console.log("deleteSubway", req.params.id);
    await Subway.findByIdAndDelete(req.params.id);
    res.status(200).json({
    status: "success",
    data: null
    });
    } catch (err) {
    console.log(err);
    }
   };

// 實作修改  UPDATE  

exports.updateSubway = async (req, res, next) => {
    try {
    //console.log("updateSubway", req.params.id);
    await Subway.findByIdAndUpdate(req.params.id, req.body, {
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

exports.createSubway = async (req, res, next) => {
    try {
      const newSubway = await Subway.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          about: newSubway
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "Invalid data sent"
      });
    }
  };   