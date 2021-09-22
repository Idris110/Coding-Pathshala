const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/codingreg",)
.then(()=>{
    console.log('connection to reg successful !');
}).catch((error)=>{
    console.log(error);
})
