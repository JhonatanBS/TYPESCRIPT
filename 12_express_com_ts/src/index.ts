/* Typescript + Express*/

console.log("Started Typescript in Express");

/* Express */

import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Ola Mundo");
});

app.listen(3333);
 