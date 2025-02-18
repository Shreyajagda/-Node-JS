const express = require("express")

const route = express.Router()
const ctl = require("../controller/schemactl")

route.get("/",ctl.dashboard)



module.exports = route;
