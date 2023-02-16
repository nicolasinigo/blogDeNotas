"use strict"
const app = require("./app.js");

const port = 3900;

app.listen(port, () =>{
    console.log("listening on port " + port);
})