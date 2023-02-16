"use strict"
const mongoose = require("mongoose");
const articleSchema = require("../schema/article.js");

module.exports = mongoose.model("article", articleSchema);