const express= require("express");
const app= express();
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');
const Diary= require("./db");
const MongoClient = require('mongodb').MongoClient;

//static files
app.use(express.static("public"));

//template engine
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//mongoDB
let url = "mongodb://localhost:27017/diary";

//endpoints
app.get("/", (req, res)=>{
    MongoClient.connect(url, function(err, client) {
        let db = client.db('diary'); //we are extracting data from DB then print it on screen
        db.collection("datas").find({}).toArray(function(err, result) {
          let obj= result;
          //take data from DB in object and then loop it with HBS
          res.render("index",{
            dynamicComment: obj, //this is an object & this will get print one by one in index.hbs
        }); 
          client.close();
        });
      });
});

app.post("/", (req, res)=>{
    const schemaFirst= new Diary({
        comment: req.body.write,
        name: req.body.yourname,        
    });
    schemaFirst.save();
    
    res.redirect('/');
})

app.listen(port, ()=>{
  console.log(`Listening to ${port}`);
});