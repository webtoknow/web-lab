# My dogs app with React

## Start my backend server

Instalati [JSON Server](https://github.com/typicode/json-server) folosind comanda de mai jos:

```bash
npm install -g json-server
```

Creati un fisier `db.json` cu continutul de mai jos:

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

Porniti JSON Server folosind comanda de mai jos:

```bash
json-server --watch db.json -p 4000
```

Accesand link-ul [http://localhost:4000/dogs/1](http://localhost:4000/dogs/1), veti vedea:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```


## Creare proiect

Creati proiectul folosind generatorul de proiecte [Create react app](https://facebook.github.io/create-react-app/).

```sh
npx create-react-app my-dogs
cd my-dogs
npm start
```

Accesand link-ul [http://localhost:3000](http://localhost:3000), veti vedea aplicatia noastra folosind React.
