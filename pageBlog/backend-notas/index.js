"use strict"
const app = require("./app.js");
require("./mongoo/mogoose.js");



const port = 3900;

app.listen(port, () =>{
    console.log("listening on port " + port);
})