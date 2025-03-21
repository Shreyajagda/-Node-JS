const passport = require ("passport");
const passportLocal = require("passport-local").Strategy;
const schema = require("../model/adminModel");

passport.use(new passportLocal({usernameField : "email"}, async (email, password, done)=>{
    let admin = await schema.findOne ({email: email});


    if(admin){
        if(password == admin.password){
            return done(null, admin);
        } else {
            return done(null,false);

        }
    }else{
        return done(null,false);
    }
}))


passport.serializeUser((user,done)=>{
    return done(null,user.id);
})

passport.deserializeUser( async(user,done)=>{
    let admin = await schema.findById(userId);
    return done(null,admin);
})
passport.checkAuth = (req,res,next) =>{
    if(req.isAuthenticated()){
        next();

    } else{
        res.redirect("/");
    }
}

module.exports = passport;