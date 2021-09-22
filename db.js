//connect with DB and define schema
const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/diary", {
}).then(()=> {
    console.log("connection to database is successfull");
}).catch((e)=> {
    console.log(e);
})

//define schema
const schemaOne = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});

const Diary= new mongoose.model("data", schemaOne);

module.exports= Diary;