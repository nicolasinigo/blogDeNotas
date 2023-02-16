"use strict"
const mongoose = require("mongoose");
const articleSchema = require("../schema/article");

module.exports = mongoose.model("article", articleSchema);