"use strict";
const {createArticle, getArticles} = require ("../controller/article.js");

const express = require("express")

const Router = express.Router();

Router.post("/", createArticle);
Router.get("/",getArticles);


module.exports = Router;