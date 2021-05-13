// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const fs = require("fs");

// Aplicatia
const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Create
app.post("/dogs", (req, res) => {
    const dogsList = readJSONFile();
    const newDog = {
        ...req.body,
        id: uuid.v4()
    }
    writeJSONFile([...dogsList, newDog]);
    res.redirect('/');
});

// Read One
app.get("/dogs/:id", (req, res) => {
    const id = req.params.id;
    const dogsList = readJSONFile();
    const dog = dogsList.find((dog) => dog.id === id);
    if (dog) {
        res.render('pages/dog', { dog });
    } else {
        res.render('pages/notFound');
    }
});

// Read All
app.get("/", (req, res) => {
    const dogsList = readJSONFile();

    res.render('pages/dogList', { dogs: dogsList });
});

// Update
app.get("/dogs/edit/:id", (req, res) => {
    const dogsList = readJSONFile();
    const id = req.params.id;
    const dog = dogsList.find((dog) => dog.id === id);

    if (dog) {
        res.render('pages/editDog', { dog })
    } else {
        res.render('pages/notFound');
    }
});

app.post("/dogs/edit/:id", (req, res) => {
    const dogsList = readJSONFile();
    const id = req.params.id;
    const newDog = req.body;
    newDog.id = id;

    const newDogList = dogsList.map((dog) => {
        if (dog.id === id) {
            return newDog
        }
        return dog
    });

    writeJSONFile(newDogList);
    res.redirect('/');

});

// Delete
app.get("/dogs/delete/:id", (req, res) => {
    const id = req.params.id;
    const dogsList = readJSONFile();
    const dog = dogsList.find((dog) => dog.id === id);

    if (dog) {
        const newDogList = dogsList.filter((dog) => dog.id !== id);
        writeJSONFile(newDogList);
        res.redirect('/');
    } else {
        res.render('pages/notFound');
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