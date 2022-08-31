/* Typescript + Express*/

console.log("Started Typescript in Express");

/* Express */

import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Ola Mundo");
});

app.post("/Create", (request, response) => {
  const { name, email} = request.body;
  
  return response.status(201).json({message: "Usuário criado com sucesso"});
})

app.listen(3333);
 