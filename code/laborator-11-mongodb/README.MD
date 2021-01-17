# Laborator 11 - rezolvare

## Instalare mongo db

- Instalati [Mongo DB](https://www.mongodb.com/try/download/community) daca este necesar.

Mai multe informatii despre cum sa conectati mongo DB cu nodejs gasiti in [documentatia](https://developer.mongodb.com/quickstart/node-connect-mongodb) bazei de date.

## Pornire server

- Instalati [nodeJS](https://nodejs.org/en/) daca este necesar.

- Instalati packetele din _package.json_ folosind comanda de mai jos (comanda trebuie rulata in _code\laborator-11_):

```bash
npm install
```

- Porniti Server-ul folosind comanda de mai jos:

```bash
node index.js
```

>*Nota:* Aplicatia va rula doar daca conexiunea cu baza de date este corect configurata: const dbConnectionString = 'mongodb://localhost:27017'

- Accesand link-ul [http://localhost:3000/dogs](http://localhost:3000/dogs), veti vedea lista cu catei.

## Testare server cu POSTMAN sau POSTWOMAN

Putem testa servarul web folosind [POSTMAN](https://www.getpostman.com/) si importand colectia [dogs-API-postman-collection.json](dogs-API-postwoman-collection.json). sau folosind
[Postwoman](https://postwoman.io/) importand [dogs-API-postwoman-collection.json](dogs-API-postwoman-collection.json).

## Rezolvari

Rezolvarile se gasesc in `index.js`.
