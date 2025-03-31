const express = require("express");
const routes = express.Router();
const admin = require("../model/adminSchema");
const adminCtrl = require("../controllers/adminController");
const auth = require('../authantication/auth')
routes.get("/", adminCtrl.login)
routes.post('/login', adminCtrl.loginAdmin);
const multer = require('multer')

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename :(req,file,cb)=> {
        cb(null,file.fieldname+ "-"+Date.now())
    }
})

const upload = multer({storage : Storage}).single('image')

routes.get("/dashboard",adminCtrl.dashboard);
routes.get("/form", adminCtrl.form);
routes.get("/adminData", adminCtrl.adminData);
routes.get("/deleteData", adminCtrl.deleteData);
routes.get("/editData", adminCtrl.editData);
routes.get("/clearCookies", adminCtrl.clearCookies);
routes.post("/insertData",upload,adminCtrl.insertData);
routes.post("/updateData", upload,adminCtrl.updateData);



module.exports = routes