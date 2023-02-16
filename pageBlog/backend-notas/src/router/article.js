"use strict";
const { createArticle, getArticles, deleteArticle } = require("../controller/article.js");

const express = require("express")

const Router = express.Router();

Router.post("/save", createArticle);
Router.get("/articles", getArticles);
Router.delete("/delete/:id", deleteArticle);


module.exports = Router;