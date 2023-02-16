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

const findAllArticles = async () => {
    try {
        const articles = await articleSchema.find({}).select("-id").select("-__v");
        articles.sort('-date')
        return articles
    } catch (error) {
        return "";
    }


};

const deleteService = async (_id) => {
    try {
        const article = await articleSchema.deleteOne({ _id: '${_id}' });
        return article.deletedCount;

    } catch (error) {
        return "";
    }


}

module.exports = { createArticleService, findAllArticles, deleteService };