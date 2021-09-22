const mongoose=require("mongoose");

const studentData = new mongoose.Schema({
    name :{
        type : String
    },
    phone :{
        type : String,
        unique :true
    },
    dob :{
        type : String
    },
    branch :{
        type : String
    },
    gender :{
        type : String
    },
    address:{
        type :String
    },
    class:{
        type :String
    },
    email :{
        type : String,
        unique :true
    },
    password :{
        type : String
    },

    csshtmlquiz :{
        type : String
    }
})

const Register = new mongoose.model("Person",studentData);

module.exports= Register;