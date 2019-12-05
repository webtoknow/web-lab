# Laborator 12 - rezolvare

## Pornire server

- Instalati [nodeJS](https://nodejs.org/en/) daca este necesar.

- Instalati [JSON Server](https://github.com/typicode/json-server) folosind comanda de mai jos:

```bash
npm install -g json-server
```

- Porniti JSON Server folosind comanda de mai jos:

```bash
json-server --watch db.json
```

- Accesand link-ul [http://localhost:3000/dogs](http://localhost:3000/dogs), veti vedea:

```json
{
  "dogs": [
    {
      "id": 1,
      "name": "AFFENPINSCHER",
      "img": "https://images.dog.ceo/breeds/affenpinscher/n02110627_8099.jpg"
    },
    {
      "id": 2,
      "name": "AKITA",
      "img": "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg"
    },
    {
      "id": 3,
      "name": "CHIHUAHUA",
      "img": "https://images.dog.ceo/breeds/chihuahua/n02085620_7613.jpg"
    },
    {
      "id": 4,
      "name": "LHASA",
      "img": "https://images.dog.ceo/breeds/lhasa/n02098413_7358.jpg"
    },
    {
      "id": 5,
      "name": "HOUND",
      "img": "https://images.dog.ceo/breeds/hound-afghan/n02088094_2626.jpg"
    }
  ]
}
```

## Testare server cu POSTMAN

Putem testa servarul web folosind [POSTMAN](https://www.getpostman.com/) si importand colectia [dogs-API-postman-collection.json](dogs-API-postwoman-collection.json). sau folosind
[Postwoman](https://postwoman.io/) importand [dogs-API-postwoman-collection.json](dogs-API-postwoman-collection.json).

## Rezolvari

Rezolvarile se gasesc in `index.html`, `style.css` si `script.js`.
