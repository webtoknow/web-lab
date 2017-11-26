# Laborator 9 - DOM

DOM (Document Object Model) este o interfata de programare (API) a aplicatiilor care trateaza un document HTML, XHTML sau XML ca o structura de arbore in care fiecare nod este un obiect reprezentand o parte a documentului. Obiectele pot fi manipulate in mod programat, iar eventualele schimbari vizibile aparute ca urmare pot fi reflectate în afisarea documentului.

## Exercitiul 9.1

### Hack Google

* Deschideti [google.com](www.google.com) in Chrome sau Firefox astfel incat sa aveti acces la consola.
* Gasiti logo-ul Google si stocati-l intr-o variabila.
* Modificati sursa imaginii astfel incat sa apara logo-ul de la Yahoo.
* Gasiti butonul de search Google si stocati-l intr-o variabila.
* Modificati textul buttonului astfel incat sa scrie Yahoo.

## Exercitiul 9.2

### Toate site-urile ar trebui sa aiba o sectiune "Despre noi"

* Creati un document HTML (*aboutme.html*) cu template-ul de mai jos inclus `<body>`:

```html
<h1>About Me</h1>
<ul>
  <li>Nickname: <span id="nickname"></span>
  <li>Favorites:  <span id="favorites"></span>
  <li>Hometown: <span id="hometown"></span>
</ul>
```

* Creati un fisier JavaScript folosind `<script>` la sfarsitul documentului HTML.
* Scrimbati stilul din `<body>` astfel incat sa avem font-family: "Arial, sans-serif".
* Inlocuiti ficare `<span>` (nickname, favorites, hometown) cu informatiile voastre
* Iterati prin fiecare `<li>` si adaugati clasa "list-item".
* Creati un fisier CSS (conectati-l la document) cu stilurile necesare clasei "list-item" pentru a avea un text rosu.
* Creati un nou element `<img>` cu atributul `src` catre o imagine cu voi. Adaugati acel element in pagina.

## Exercitiul 9.3

### My IMDB

* Creati un document HTML (*filme.html*) care sa contina `<h1>` cu textul "Filmele mele favorite:".
* Creati un fisier JavaScript folosind `<script>` la sfarsitul documentului HTML.
* Creati un vector cu obiecte care sa contina informatiile filmelor favorite. Obiectul trebuie sa includa `titlu` (string), `durata` (number) si `actori` (array of strings).
* Iterati prin vector si creati elemente `<p>` care sa contina numele filmului adaugandu-le in pagina.

### Bonus

* Folositi `<ul>` si `<li>` pentru a afisa filmele.
* Adaugati in fiecare obiect din vector proprietatea cu imaginea filmului si reflectati schimbarea in pagina.
* Schimbati stilurile filmelor in functie de categoria in care este plasat (actiune, comedie, animatie, etc).