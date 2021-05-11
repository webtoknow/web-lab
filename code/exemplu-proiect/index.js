// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuidv1 = require('uuid/v1');

const fs = require("fs");

// Aplicatia
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());


// Link SPA static files 
app.use("/", express.static('spa'));


// Create
app.post("/articles", (req, res) => {
  const articlesList = readJSONFile();
  const newArticle = req.body;
  newArticle.id = uuidv1();
  const newArticleList = [...articlesList, newArticle];
  writeJSONFile(newArticleList);
  res.json(newArticle);
});

// Read One
app.get("/articles/:id", (req, res) => {
  const articlesList = readJSONFile();
  const id = req.params.id;
  let idFound = false;
  let foundArticle;

  articlesList.forEach(article => {
    if (id === article.id) {
      idFound = true;
      foundArticle = article
    }
  });

  if (idFound) {
    res.json(foundArticle);
  } else {
    res.status(404).send(`Dog ${id} was not found`);
  }
});

// Read All
app.get("/articles", (req, res) => {
  const articlesList = readJSONFile();
  res.json(articlesList);
});

// Update
app.put("/articles/:id", (req, res) => {
  const articlesList = readJSONFile();
  const id = req.params.id;
  const newArticle = req.body;
  newArticle.id = id;
  idFound = false;

  const newArticlesList = articlesList.map((article) => {
     if (article.id === id) {
       idFound = true;
       return newArticle
     }
    return article
  })
  
  writeJSONFile(newArticlesList);

  if (idFound) {
    res.json(newArticle);
  } else {
    res.status(404).send(`Dog ${id} was not found`);
  }

});

// Delete
app.delete("/articles/:id", (req, res) => {
  const articlesList = readJSONFile();
  const id = req.params.id;
  const newArticlesList = articlesList.filter((dog) => dog.id !== id)

  if (articlesList.length !== newArticlesList.length) {
    res.status(200).send(`Dog ${id} was removed`);
    writeJSONFile(newArticlesList);
  } else {
    res.status(404).send(`Dog ${id} was not found`);
  }
});

// Functia de citire din fisierul db.json
function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["articles"];
}

// Functia de scriere in fisierul db.json
function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ articles: content }),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

// Pornim server-ul
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);
