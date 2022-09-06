/* ENV variables */
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

/* JSON Middleware */
app.use(express.json());

/* DB */
import db from "../config/db";

/* Routes */
import router from "./router";

app.use("/api/", router);

/* app port*/
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();  
  console.log("Aplicação rodando na porta 3000");  
});
