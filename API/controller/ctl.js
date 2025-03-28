const schema = require("../model/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// module.exports.addData = async (req, res) => {
//     console.log("Request Body:", req.body);
//     try {
//         let data = await schema.create(req.body);
//         res.status(200).json({ message: "Data added successfully", data });
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).json({ message: "Data validation failed", error: error.message });
//     }
// };
// module.exports.deleteData = async (req, res) => {
//     try {
//         await schema.findByIdAndDelete(req.params.id);
//         res.json({ message: "Data deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports.updateData = async (req, res) => {
//     try {
//         const { name } = req.body;
//         const editID = req.params.id;
//         const updatedData = await schema.findByIdAndUpdate(editID, { name }, { new: true });
//         res.json({ message: "Data updated successfully", updatedData });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports.viewData = async (req, res) => {
//     try {
//         const data = await schema.find();  
//         res.json({ message: "Data fetched successfully", data });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
module.exports.registerAdmin = async (req,res)=>{
    let admin = await schema.findOne({ email: req.body.email});
    if(admin){
        return res.status(200).json({msg: "admin already registered!"});

    }

    req.body.password = await bcrypt.hash (req.body.password, 10);

    await schema.create(req.body).then(()=>{
        res.status(200).json({msg: "admin registered successfully!"});

    });
};
