// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

// Aplicatia
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// URL-ul Mongodb
const dbConnectionString = 'mongodb://localhost:27017'

// Clientul Mongodb
MongoClient.connect(dbConnectionString)
  .then(client => {
    console.log('db connected')
    // Baza de date "dogs"
    const db = client.db('dogs');
    // Colectia "dog"
    const dogCollection = db.collection('dog')

    // Create
    app.post("/dogs", (req, res) => {
      const newDog = req.body;
      dogCollection.insertOne(newDog).then(result => {
        res.json(result.ops[0]);
      }).catch((error) => {
      })
    });

    // Citire informatii un sigur catel
    app.get("/dogs/:id", (req, res) => {
      const id = req.params.id;
      dogCollection.findOne({
        _id: new ObjectId(id)
      })
        .then(result => {
          console.log(result);
          res.json(result);
        }).catch((error) => {
        })
    });

    // Citire informatii lista
    app.get("/dogs", (req, res) => {
      dogCollection.find().toArray()
        .then(result => {
          res.json(result)
        }).catch((error) => {
        })
    });

    // Update
    app.put("/dogs/:id", (req, res) => {
      const id = req.params.id;
      const newDog = req.body;

      var myquery = {
        _id: new ObjectId(id),
      }
      var newvalues = { $set: newDog };

      dogCollection.updateOne(myquery, newvalues)
        .then(result => {
          console.log(result);
          res.json({ ...newDog, id: id });
        }).catch((error) => {
        })
    });

    // Stergere
    app.delete("/dogs/:id", (req, res) => {
      const id = req.params.id;
      dogCollection.remove({
        _id: new ObjectId(id)
      })
        .then(result => {
          console.log(result);
          res.send('ok');
        }).catch((error) => {
        })
    });

  }).catch((error) => {
    console.log('db not connected')
  })


// Pornim server-ul
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);