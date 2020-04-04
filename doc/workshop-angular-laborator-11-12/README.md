# Aplicatia "My dogs" cu Angular

## Cuprins

- [Pornirea server-ului de backend](#pornirea-server-ului-de-backend)
- [Crearea aplicatiei](#crearea-aplicatiei)

## Pornirea server-ului de backend

Instalati [JSON Server](https://github.com/typicode/json-server) folosind comanda de mai jos:

```bash
npm install -g json-server
```

Creati un fisier `db.json` avand continutul de mai jos:

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

Porniti `JSON Server` folosind comanda de mai jos:

```bash
json-server --watch db.json -p 4000
```

Accesand link-ul [http://localhost:4000/dogs/1](http://localhost:4000/dogs/1), veti vedea:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## Crearea aplicatiei

Creati proiectul folosind interfata de comanda [Angular CLI](https://cli.angular.io/).

```sh
npm install -g @angular/cli
ng new my-dogs
cd my-dogs
ng serve
```

Accesand link-ul [http://localhost:4200](http://localhost:4200), veti vedea aplicatia noastra folosind Angular.
