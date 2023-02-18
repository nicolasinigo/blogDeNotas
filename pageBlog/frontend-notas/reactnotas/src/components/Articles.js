import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Global from "../Global";
import Article from "./article.js";

const Articles = () => {

    const [articles, setArticles] = useState([])
    const url = Global.url;

    useEffect(() => {
        getArticles();
        console.log(articles);

    }, [articles.length]);
    // Obtenemos todos los articulos:
    const getArticles = () => {
        axios.get(url + "articles").then(res => {
            setArticles(res.data.articles);
        });
    };
    // Eliminamos un articulo atravez de su id:
    const deleteArticle = (id) => {
        const idArticle = articles[id]._id;
        axios.delete(url + "delete/" + idArticle).then(res => {
            getArticles();
        });

    };

    return (
        <div className="publicaciones">

            <h1 className="mt-5" >
                articulos
            </h1>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {
                        articles.length > 0 ? (
                            articles.map((Article, i) => {
                                return (
                                    <article
                                        key={i}
                                        id={i}
                                        articleData={Article}
                                        delArticle={deleteArticle}

                                    />
                                );
                            })
                        ) : (
                            <h3 className="mx-auto"> no hay articulos que mostrar</h3>
                        )

                    }

                </div>


            </div>

        </div>

    );
};

export default Articles;