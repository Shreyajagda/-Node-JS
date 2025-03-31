module.exports = (req,res,next)=>{
    if (req.cookies.adminData == undefined) {
        return res.redirect("/")    
    } else {
        next()
    }
}