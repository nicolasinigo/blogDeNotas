const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const DB_URI = "mongodb://127.0.0.1/artricle";

mongoose.connect(DB_URI,{useNewUrlParser : true});


const connection= mongoose.connection;

connection.once("open", () => {
    console.log("DB  conectada");
})
