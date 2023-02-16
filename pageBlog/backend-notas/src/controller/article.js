"use strict";

const { createArticleService, findAllArticles, deleteService } = require("../model/article");



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
        res.status(200).json({ article: response });
    } else {
        res.status(404)
    };

};

const deleteArticle = async (req, res) => {
    const _id = body.params._id;
    const article = await deleteService(_id);
    if (article > 0) {
        res.status(200).send("article eliminado");

    } else {
        res.status(404).send("ERROR");

    };
};




module.exports = { createArticle, getArticles, deleteArticle };
