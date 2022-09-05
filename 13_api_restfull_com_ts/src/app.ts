import express from "express";
import config from "config";

const app = express();

/* JSON Middleware */
app.use(express.json());

/* app port*/
const port = config.get<number>("port");

app.listen(port, async () => {
  console.log("Aplicação rodando na porta 3000");  
});
