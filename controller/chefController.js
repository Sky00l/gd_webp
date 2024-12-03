const Chef = require("../model/chefModel");
exports.getChef = async (req, res, next) => {
 let chef;
 try {
    chef = await Chef.find();
 //console.log("chef", JSON.stringify(chef));

/*  連接Postman 須把此打開 */
//  res.status(200).json({
//     status: "success",
//     length: chef.length,
//     data: chef
//     });

 /* 連接網頁須把這裡打開 */
    res.render("chef", {
    data: chef,
    title: "GD Chef"
    });
   
 } catch (err) {
 console.log(err);
 }
};

// 實作READ，讀取⼀筆

exports.getChefById = async (req, res, next) => {
    let chef;
    try {
        chef = await Chef.findById(req.params.id);
    //console.log("chef",JSON.stringify(chef));
    res.status(200).json({
    status: "success",
    data: chef
    });
    } catch (err) {
    console.log(err);
    }
    };
    
// 實作刪除 DELETE

exports.deleteChef = async (req, res, next) => {
    try {
    //console.log("deleteChef", req.params.id);
    await Chef.findByIdAndDelete(req.params.id);
    res.status(200).json({
    status: "success",
    data: null
    });
    } catch (err) {
    console.log(err);
    }
   };

// 實作修改  UPDATE  

exports.updateChef = async (req, res, next) => {
    try {
    //console.log("updateChef", req.params.id);
    await Chef.findByIdAndUpdate(req.params.id, req.body, {
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

exports.createChef = async (req, res, next) => {
    try {
      const newChef = await Chef.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          about: newChef
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "Invalid data sent"
      });
    }
  };   