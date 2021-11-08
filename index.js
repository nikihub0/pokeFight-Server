import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 8000;
let rawdata = fs.readFileSync("./pokedex.json");
let pokemonData = JSON.parse(rawdata);
//console.log(pokemonData);

app.use(cors());

app.get("/", (req, res) => {
  console.log("Dies ist die root route");
});

app.get("/pokemon", (req, res) => {
  res.json(pokemonData);
});

app.get("/pokemon/:id", (req, res) => {
  let { id } = req.params;
  const pokemon = pokemonData.find((pokemon) => pokemon.id === parseInt(id));

  res.json(pokemon);
});



for (const [key, value] of Object.entries(pokemonData)) {
  console.log(value.type[0]);
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
/*Create a GET route on /pokemon which gives the complete list of pokemon from the JSON
Create a GET route on /pokemon/:id which gives only one pokemon from the JSON thanks to its id
(Optional) Create a GET route on /pokemon/:id/:info (<name>|<type>|<base>) which gives only one pokemon from the JSON thanks to its id and retrieve only one information (name or type or base) to send back to the client
(Optional): Use the MVC pattern; your routes should be managed by a router; which in return triggers a controller that will access the correct Pokemon resources
Enable all the CORS: https://expressjs.com/en/resources/middleware/cors.html */
