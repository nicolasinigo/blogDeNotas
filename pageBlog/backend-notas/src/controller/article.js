"use strict";

const { createArticleService, findAllArticles, deleteService } = require("../service/article.js");



const createArticle = async (req, res) => {
    const { title, content, author } = req.body;
    const response = await createArticleService(title, content, author);
    if (response !== "") {
        res.status(200).send(response);
    } else {
        res.status(400).send("ERROR");

    };

};

const getArticles = async (req, res) => {
    const response = await findAllArticles();
    if (response.length > 0) {
        res.status(200).json({ articles: response });
    } else {
        res.status(404)
    };

};

const deleteArticle = async (req, res) => {
    const id = req.params.id;
    const article = await deleteService(id);
    if (article > 0) {
        res.status(200).send("article eliminado");

    } else {
        res.status(404).send("ERROR");

    };
};




module.exports = { createArticle, getArticles, deleteArticle };
