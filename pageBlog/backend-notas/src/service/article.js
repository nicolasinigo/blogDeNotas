"use strict";
const articleSchema = require("../model/article.js");


const createArticleService = async (title, content, author) => {
    try {
        const article = await articleSchema.create({
            title,
            content,
            author
        });
        return article;
    } catch (error) {
        return "";
    };
};

const findAllArticles = async() => {
    try {
        const articles = await articleSchema.find({}).select("-id").select("-__v");
        articles.sort('-date')
        return articles
    } catch (error) {
        return "";
    }
    

}

module.exports = {createArticleService, findAllArticles};