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

// Create
app.post("/dogs", (req, res) => {
  const dogsList = readJSONFile();
  const newDog = req.body;
  newDog.id = uuidv1();
  const newDogList = [...dogsList, newDog];
  writeJSONFile(newDogList);
  res.json(newDog);
});

// Read One
app.get("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  const id = req.params.id;
  let idFound = false;
  let foundDog;

  dogsList.forEach(dog => {
    if (id === dog.id) {
      idFound = true;
      foundDog = dog
    }
  });

  if (idFound) {
    res.json(foundDog);
  } else {
    res.status(404).send(`Dog ${id} was not found`);
  }
});

// Read All
app.get("/dogs", (req, res) => {
  const dogsList = readJSONFile();
  res.json(dogsList);
});

// Update
app.put("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  const id = req.params.id;
  const newDog = req.body;
  newDog.id = id;
  idFound = false;

  const newDogsList = dogsList.map((dog) => {
     if (dog.id === id) {
       idFound = true;
       return newDog
     }
    return dog
  })
  
  writeJSONFile(newDogsList);

  if (idFound) {
    res.json(newDog);
  } else {
    res.status(404).send(`Dog ${id} was not found`);
  }

});

// Delete
app.delete("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  const id = req.params.id;
  const newDogsList = dogsList.filter((dog) => dog.id !== id)

  if (dogsList.length !== newDogsList.length) {
    res.status(200).send(`Dog ${id} was removed`);
    writeJSONFile(newDogsList);
  } else {
    res.status(404).send(`Dog ${id} was not found`);
  }
});

// Functia de citire din fisierul db.json
function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["dogs"];
}

// Functia de scriere in fisierul db.json
function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ dogs: content }),
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
