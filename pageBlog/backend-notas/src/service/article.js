"use strict";
const articleSchema = require("../model/article.js");
const crypto = require("crypto");


const createArticleService = async (title, content, author) => {
    try {
        const id = crypto.randomUUID();
        const article = await articleSchema.create({
            id,
            title,
            content,
            author
        });
        return article;
    } catch (error) {
        return "";
    };
}

const findAllArticles = async () => {
    try {
        const articles = await articleSchema.find({});
        const art = articles.sort();
        return art;
    } catch (error) {
        return "";
    };


};

const deleteService = async (id) => {
    try {
        const article = await articleSchema.deleteOne({id: `${id}`});
        return article.deletedCount;

    } catch (error) {
        return "";
    }

};

module.exports = { createArticleService, findAllArticles, deleteService };