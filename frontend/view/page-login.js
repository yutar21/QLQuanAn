import express from "express";
import res from "express/lib/response";
import configViewEngine from "../configs/viewEngine";
import initWebRoute from "../route/web";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
