// Ici nous venons de créer notre propre API et qui fonctionne dans notre navigateur http://localhost:3310/api/employees.
import express from "express";
// Ici nous avons crée notre application Express de base
import cors from "cors";
// Ici nous avons crée notre politique de partage avec "npm i cors" pour lié notre localhost:5173 à celui-ci
const app = express();

const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };

app.use(cors({ origin: ["http://localhost:5173"] }));
// Et enfin ici nous avons notre nouvelle route lié au localhost de fetch-employees de notre application React. Nous venons de lié notre front et notre back!

// Ici nous déclarons notre route avec app.get "/" et on peut y ajouter à l'intérieur un nom de route spécifique ex "/chemin"
app.get("/api/employees", (req, res) => {
  res.json({results:[sampleEmployee]});
// Ici dans le cas d'une API on peut modifier res.send en lui attribuant un fichier .json ex: res.json(avec un résultat entre les parenthèses)
});
// Ici 3310 est notre port pour notre localhost
const port = 3310;
// Ici on vient écouter notre port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});