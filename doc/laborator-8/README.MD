# Laborator 8 - [JS] - AJAX si redarea dinamica a continutului pe client - Partea intai

## Cuprins

- [🦉 Introducere](#-Introducere)
- [🎢 Exercitii](#-Exercitii)
- [📹 Video](#-Video)

## 🦉 Introducere

### AJAX

AJAX este prescurtarea pentru Asynchronous JavaScript and XML (JavaScript si XML asincron) si reprezinta o colectie de tehnologii utilizate in dezvoltarea aplicatiilor web. AJAX presupune un schimb redus de date intre browser si server, astfel incat sa nu mai fie necesara reincarcarea intregii pagini web de fiecare data cand utilizatorul face o schimbare in pagina.

![Ajax](AJAX-animation.gif)

### Redarea continutului in browser - Client side rendering

Odata cu cresterea performantei dispozitivelor (calculatoare, telefoane mobile, tablete etc.), a aparut conceputul de a reda continutul paginii web direct in browser cu ajutorul Javascript-ului (nu pe server cum se intampla pana atunci). Acest tip de aplicatie se mai numeste si *Single Page Application* deoarece rescrie dinamic pagina curenta, fara a mai fi nevoie de reincarcarea acesteia (refresh).

![Client side rendering](Client-side-rendering-animation.gif)

In animatia de mai sus este prezentat modul de comunicare dintre client (browser) si server cand se reda continutul dinamic in browser:

 1. Browser-ul face prima cerere catre server pentru a aduce documentul HTML;

 2. Server-ul raspunde cu documentul HTML, care contine doar link-urile catre fisierele de CSS si Javascript;

 3. Browser-ul parseaza HTML-ul;

 4. Browser-ul face noi cereri pentru fisierele cu referinta in HTML;

 5. Server-ul raspunde cu fisierele CSS si Javascript cerute;

 6. Browser-ul executa codul Javascript si creeaza structura paginii (layout/template);

 7. Browser-ul face noi cereri pentru fisierele JSON cu informatiile necesare redarii continutului;

 8. Server-ul interogheaza baza de date si creeaza fisierele JSON cu informatiile cerute;

 9. Server-ul raspunde catre browser cu fisierele JSON;

 10. Browser-ul reda continutul in structura paginii.

## 🎢 Exercitii

### 💪  Exercitiul 8.1

#### My server

- Instalati [JSON Server](https://github.com/typicode/json-server) folosind comanda de mai jos:

```bash
npm install -g json-server
```

- Creati un fisier `db.json` cu continutul de mai jos:

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

- Porniti JSON Server folosind comanda de mai jos:

```bash
json-server --watch db.json
```

- Accesand link-ul [http://localhost:3000/dogs](http://localhost:3000/dogs), veti vedea lista de catei:

```json
[
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
```

### 💪  Exercitiul 8.2

#### Get all Dogs

- Creati un document HTML `index.html`.
- Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
- Aduceti de la server lista de entitati _dog_ folosind [fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch) - actiune de tip [GET](https://spring.io/understanding/REST#get).
- Creati dinamic si afisati lista de entitati in pagina (nume si imagine) folosind [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).

## 📹 Video

[Tony Alicea](https://twitter.com/anthonypalicea) are un tutorial foarte bun [Don't Imitate, Understand #2 - Promises, Async, and Await](https://www.youtube.com/watch?v=fyGSyqEX2dw&t=146s) care ne ajuta sa intelegem mai bine cum sa facem requesturi la server.
