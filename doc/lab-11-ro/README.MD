# Laborator 11 - [NodeJS] - CRUD API

## Cuprins

- [🦉 Introducere](#-Introducere)
- [🎢 Exercitii](#-Exercitii)

## 🦉 Introducere

In tabelul de mai jos avem operatiile [CRUD](https://www.codecademy.com/articles/what-is-crud) (_Create_, _Read_, _Update_ si _Delete_) asociate cu metodele HTTP corespunzatoare:

| CRUD Operation | HTTP method | URL       | URL params | Request body | example                  |
| -------------- | ----------- | --------- | ---------- | ------------ | ------------------------ |
| _Create_       | POST        | /dogs     |            | body: {...}  | POST /dogs body: {...}   |
| _Read One_     | GET         | /dogs/:id | :id        |              | GET /dogs/123            |
| _Read All_     | GET         | /dogs     |            |              | GET /dogs                |
| _Update_       | PUT         | /dogs/:id | :id        | body: {...}  | PUT /dogs/123 body:{...} |
| _Delete_       | DELETE      | /dogs/:id | :id        |              | DELETE /dogs/123         |

## 🎢 Exercitii

### 💪 Exercitiul 11.1

#### Creare proiect si instalare pachete

- Creati un nou proiect folosind npm:

```bash
npm init
```

- Instalati toate pachetele [express](https://expressjs.com/), [bodyParser](https://github.com/expressjs/body-parser), [cors](https://expressjs.com/en/resources/middleware/cors.html), [uuid](https://github.com/kelektiv/node-uuid#readme), [morgan](https://github.com/expressjs/morgan) and [nodemon](https://nodemon.io/), folosind comenzile de mai jos:

```bash
npm install --save express body-parser cors uuid
```

```bash
npm install --save-dev morgan nodemon
```

```bash
npm install -g nodemon
```

- Creati un fisier `db.json` cu continutul de mai jos:

```json
{
  "dogs": [
    {
      "id": "5eadf350-105e-11ea-983f-f5983827844a",
      "name": "AFFENPINSCHER",
      "img": "https://images.dog.ceo/breeds/affenpinscher/n02110627_8099.jpg"
    },
    {
      "id": "71ed9fb0-105e-11ea-983f-f5983827844a",
      "name": "AKITA",
      "img": "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg"
    },
    {
      "id": "89256140-105e-11ea-983f-f5983827844a",
      "name": "CHIHUAHUA",
      "img": "https://images.dog.ceo/breeds/chihuahua/n02085620_7613.jpg"
    },
    {
      "id": "898c1250-105e-11ea-983f-f5983827844a",
      "name": "LHASA",
      "img": "https://images.dog.ceo/breeds/lhasa/n02098413_7358.jpg"
    },
    {
      "id": "8a7fc120-105e-11ea-983f-f5983827844a",
      "name": "HOUND",
      "img": "https://images.dog.ceo/breeds/hound-afghan/n02088094_2626.jpg"
    }
  ]
}
```

- Creati un fisier `index.js` cu continutul de mai jos:

```javascript
// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

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
  // Completati cu codul vostru aici
});

// Read One
app.get("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Read All
app.get("/dogs", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Update
app.put("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
});

// Delete
app.delete("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  // Completati cu codul vostru aici
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
```

- Porniti server-ul de dezvoltare folosind nodemone:

```bash
nodemon index.js
```

sau folosind [VS Code debugger](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

> Putem sa comparam rezultatele noastre cu solutia finala folosind serverul: [https://morning-cheddar.glitch.me/dogs](https://morning-cheddar.glitch.me/dogs).

### 💪 Exercitiul 11.2

Importati colectia [dogs-API-postman-collection.json](https://github.com/WebToLearn/laborator-tehnici-web/blob/rezolvari/code/laborator-11/dogs-API-postman-collection.json) in [Postman](https://www.postman.com/downloads/) pentru a va ajuta la testarea serverului.

### 💪 Exercitiul 11.3

Pornind de la codul scris in `index.js`, creati un API rezolvand exercitiile urmatoare.

> La fiecare pas, asigurati-va ca faceti urmatoarele actiuni:
>
> - 1 - Interceptare REQUEST
> - 2 - Interactiune cu baza de date
> - 3 - Trimitere RESPONSE inapoi CLIENT

![CRUD](CRUD.png)

### 💪 Exercitiul 11.3.1

Salvati noile entitati de la client in fisierul `db.json` - actiune de tip POST - _Create_.

#### 💪 Exercitiul 11.3.2

Trimiteti la client o anumita entitate in functie de _id_ din fisierul `db.json` - actiune de tip GET - _Read One_

#### 💪 Exercitiul 11.3.3

Trimiteti la client toate entitatile din fisierul `db.json` - actiune de tip GET - _Read All_

#### 💪 Exercitiul 11.3.4

Actualizati o anumita entitate in functie de _id_ in fisierul `db.json` - actiune de tip PUT - _Update_.

#### 💪 Exercitiul 11.3.5

Stergeti una din entitatile existente din lista in functie de _id_ din fisierul `db.json` - actiune de tip DELETE - _Delete_.
