import express from "express";

const configViewEngine = (app) => {
    app.use(express.static(`./frontend/view`));
    app.set("view engine", "ejs");
    app.set("view", "./frontend/view")
}

export default configViewEngine;