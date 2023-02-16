"use strict";

const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String},
    date: {
        type: Date,
        default: Date.now},
    content: {
        type: String
    },
    author:{
        type: String
    }
})

module.exports = articleSchema;