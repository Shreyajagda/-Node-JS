const admin = require("../model/adminSchema")

module.exports.login = (req, res) => {
    res.render("login");
};

module.exports.loginAdmin = async (req, res) => {
    const user = await admin.findOne({ email: req.body.email });
  
    if (!user) {
      return res.redirect("/");
    }
    if(user.password == req.body.password){
        res.cookie("adminData", user);
        res.redirect("/dashboard");
    }else{
        res.redirect("back");
    }
    
  };

module.exports.dashboard = async (req, res) => {
        res.render("dashboard")
}

module.exports.form = (req, res) => {
    res.render("form")
}

module.exports.insertData = async (req, res) => {
    if(req.file){
        req.body.image = req.file.path
    }
    req.body.image = req.file.path
    let data = await admin.create(req.body);
    data ? res.redirect('adminData') : console.log("Data not Inserted")
}

module.exports.adminData = async (req, res) => {
    let data = await admin.find({})
    res.render("adminData", { data })
}

module.exports.clearCookies = (req, res) => {
    res.clearCookie("adminData");
    res.redirect("/");
  };

module.exports.deleteData = async (req, res) => {
    let deleteData = await admin.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("back") : console.log("Data is not deleted");
}

module.exports.editData = async (req, res) => {
    let edit = await admin.findById(req.query.id);
    edit ? res.render("editPage", { edit }) : console.log("Data is not edit yet !")
}

module.exports.updateData = async (req, res) => {
    // console.log(req.body)
    let update = await admin.findByIdAndUpdate(req.query.id, req.body)
    update ? res.redirect("/adminData") : console.log("data not updated")
}
