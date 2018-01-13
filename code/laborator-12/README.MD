
# Laborator 12 - rezolvare

## Pornire serverul

* Instalati [nodeJS](https://nodejs.org/en/) daca este necesar.

* Instalati [JSON Server](https://github.com/typicode/json-server) folosind comanda de mai jos:

```bash
npm install -g json-server
```

* Porniti JSON Server folosind comanda de mai jos:

```bash
json-server --watch db.json
```

* Accesand link-ul [http://localhost:3000/dogs/1](http://localhost:3000/dogs), veti vedea:

```json
{
  "dogs": [
    { "id": 1, "name": "AFFENPINSCHER", "img": "https:\/\/dog.ceo\/api\/img\/affenpinscher\/n02110627_11584.jpg" },
    { "id": 2, "name": "AKITA", "img": "https:\/\/dog.ceo\/api\/img\/akita\/Akita_Inu_dog.jpg" },
    { "id": 3, "name": "CHIHUAHUA", "img": "https:\/\/dog.ceo\/api\/img\/chihuahua\/n02085620_8578.jpg" },
    { "id": 4, "name": "LHASA", "img": "https://dog.ceo//api//img//lhasa//n02098413_3033.jpg" },
    { "id": 5, "name": "MINIATURE SCHNAUZER", "img": "https://dog.ceo//api//img//schnauzer//n02097209_920.jpg" }
  ]
}
```

## POSTMAN

Putem testa serverul web folosind [POSTMAN](https://www.getpostman.com/) si importand colectia *laborator-12 AJAX.postman_collection.json*
