const About = require("../model/aboutModel");


exports.getAbout = async (req, res, next) => {
 let about;
 try {
    about = await About.find();
//console.log("about", JSON.stringify(about));



/*  連接Postman 須把此打開 */
// res.status(200).json({
//     status: "success",
//     length: about.length,
//     data: about
//     });

 /* 連接網頁須把這裡打開 */
    res.render("about", {
    data: about,
    title: "GD About"
    });


    
     } catch (err) {
 console.log(err);
 }
};

// READ
exports.getAboutById = async (req, res, next) => {
    let about;
    try {
     about = await About.findById(req.params.id);
    //console.log("portfolio",JSON.stringify(portfolio));
    res.status(200).json({
    status: "success",
    data: about
    });
    } catch (err) {
    console.log(err);
    }
    };

// 實作刪除 DELETE 
exports.deleteAbout = async (req, res, next) => {
    try {
    //console.log("deleteAbout", req.params.id);
    await About.findByIdAndDelete(req.params.id);
    res.status(200).json({
    status: "success",
    data: null
    });
    } catch (err) {
    console.log(err);
    }
   };

// 實作修改  UPDATE 
exports.updateAbout = async (req, res, next) => {
    try {
    //console.log("updateABout", req.params.id);
    await About.findByIdAndUpdate(req.params.id, req.body, {
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

exports.createAbout = async (req, res, next) => {
    try {
      const newAbout = await About.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          about: newAbout
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "Invalid data sent"
      });
    }
  };