/* Typescript + Express*/

console.log("Started Typescript in Express");

/* Express */

import express, { Request, Response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Ola Mundo");
});

app.post("/Create", (request, response) => {
  const { name, email} = request.body;
  
  return response.status(201).json({message: "Usuário criado com sucesso"});
});

app.all("/DeleteorUpdate", (request, response) => {
  if(request.method === "update"){
    return response.send("Update success");
  }else if(request.method === "delete"){
    return response.send("Delete success");
  }else{
    return response.send("Acesso negado!");
  }
});

app.delete("/deleteUser", (request: Request, response: Response) => {
  return response.status(200).json({message: "User delete success"});
});

app.listen(3333);
 