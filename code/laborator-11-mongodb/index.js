// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

// App
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// URL Mongodb
const dbConnectionString = 'mongodb://localhost:27017'

// Client Mongodb
MongoClient.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('db connected')
    
    // Database "dogs"
    const db = client.db('dogs');
    // Collection "dog"
    const dogCollection = db.collection('dog')

    // Create
    app.post("/dogs", (req, res) => {
      const newDog = req.body;
      dogCollection.insertOne(newDog).then((response) => {
        const insertedDogId = response.insertedId;

        dogCollection.findOne({ _id: new ObjectId(insertedDogId) })
          .then((dog) => {
            res.json(dog);
          });
      });
    });

    // Read One
    app.get("/dogs/:id", (req, res) => {
      const id = req.params.id;
      dogCollection.findOne({
        _id: new ObjectId(id)
      })
        .then(response => {
          res.json(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    // Read All
    app.get("/dogs", (req, res) => {
      dogCollection.find().toArray()
        .then((dogsList) => {
          res.json(dogsList);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    // Update
    app.put("/dogs/:id", (req, res) => {
      const id = req.params.id;
      const newDog = req.body;

      const dogQuerry = { _id: new ObjectId(id) };
      const newDogValue = { $set: newDog };

      dogCollection.updateOne(dogQuerry, newDogValue)
        .then(() => {
          res.json({ ...newDog, id: id });
        })
        .catch((error) => {
          console.log(error);
        });;

    });

    // Delete
    app.delete("/dogs/:id", (req, res) => {
      const id = req.params.id;
      dogCollection.deleteOne({ _id: new ObjectId(id) })
        .then((response) => {
          res.send(`The dog with ${id} was deleted`);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });

  }).catch((error) => {
    console.log('db not connected: ', error);
  })


// Starting the server
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);