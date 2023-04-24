import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomepage);
    router.post('/add_nhanvien.html', homeController.getAddnhanvien);
    router.post('/ql_ban.html', homeController.getAddban);

    return app.use('/', router)
}

export default initWebRoute;