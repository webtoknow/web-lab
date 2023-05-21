# Laborator 6 - [JS] - DOM

## Cuprins

- [🦉 Introducere](#-Introducere)
- [🎢 Exercitii](#-Exercitii)

## 🦉 Introducere

DOM ([Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)) este o interfata de programare (API) a aplicatiilor care trateaza un document HTML, XHTML sau XML ca o structura de arbore in care fiecare nod este un obiect reprezentand o parte a documentului. Obiectele pot fi manipulate in mod programat, cu ajutorul [functiilor DOM](https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript/), iar eventualele schimbari vizibile aparute in urma executarii lor vor fi reflectate in afisarea documentului.

## 🎢 Exercitii

### 💪 Exercitiul 6.1

#### Hack Google

- Deschideti [google.com](https://www.google.com) in Chrome sau Firefox si afisati consola: Dev Tools - Cmd-Opt-I (Mac), Ctrl-Shift-I (Windows).
- Gasiti logo-ul Google si stocati-l intr-o variabila folosind [DOM access methods](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-access/a/summary-dom-access-methods).
- Modificati sursa imaginii (url-ul) astfel incat sa apara logo-ul de la Yahoo. Puteti cauta url-ul logo-ului de la Yahoo intr-un motor de cautare.
- Gasiti butonul de search Google si stocati-l intr-o variabila.
- Modificati textul buttonului astfel incat sa scrie "Yahoo".

### 💪 Exercitiul 6.2

#### Toate site-urile ar trebui sa aiba o sectiune "Despre noi"

- Creati un document HTML (_aboutme.html_) cu template-ul de mai jos inclus in `<body>`:

```html
<h1>Despre mine/h1>
<dl>
  <dt>Porecla:</dt>
  <dd id="nickname"></dd>
  <dt>Varsta:</dt>
  <dd id="age"></dd>
  <dt>Oras:</dt>
  <dd id="hometown"></dd>
</dl>
```

- Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
- Schimbati stilul din `<body>` astfel incat sa avem font-family: _Arial, sans-serif_.
- Inlocuiti fiecare `<dd>` (_nickname, age, hometown_) cu informatiile voastre.
- Iterati prin fiecare `<dt>` si adaugati clasa _list-item_.
- Creati un fisier CSS (conectati-l la document) cu stilurile necesare clasei _list-item_ pentru a avea un text rosu.
- Creati un nou element `<img>` cu atributul `src` catre o imagine cu voi. Adaugati acest element in pagina.

### 💪 Exercitiul 6.3

#### My IMDB

- Creati un document HTML (_filme.html_) cu titlul "Filmele mele favorite:", folosind tag-ul `<h1>`.
- Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
- Creati un vector cu obiecte care sa contina informatiile filmelor favorite. Obiectul trebuie sa includa _titlu_ (string), _durata_ (number), _actori_ (array of strings) si o propietate de tip boolean care sa indice daca filmul a fost vizualizat sau nu.
- Iterati prin vector si creati dinamic (folosind `document.createElement`) in pagina cate un element`<p>` care sa contina titlul filmului.

### 🎁 Exercitiul 6.4

- Folositi `<ul>`, `<li>` si `<article>` pentru a afisa filmele, alaturi de celelalte informatii despre acestea.
- Adaugati in fiecare obiect din vector o proprietate reprezentand imaginea filmului si reflectati schimbarea in pagina.
- Adaugati "Da" sau "Nu" care sa diferentieze filmele vizualizate de cele nevizualizate din lista.

HTML-ul ar trebui sa arate similar cu acesta:

```html
<ul>
  <li>
    <article>
      <h2>Titlu:</h2>
      <p>Titlu film 1</p>

      <h2>Durata:</h2>
      <p>120 minutes</p>

      <h2>Actori:</h2>
      <ul>
        <li>Actor 1</li>
        <li>Actor 2</li>
        <li>Actor 3</li>
      </ul>

      <figure>
        <img src="movie1.jpg" alt="Film 1 Poster">
        <figcaption>Film 1 Poster</figcaption>
      </figure>

      <h2>Vazut:</h2>
      <p>Nu</p>
    </article>
  </li>

  <!-- Repetă structura pentru fiecare obiect de film -->
</ul>
```

## 💗 Recunoastere a meritelor

Exercitiile 6.1, 6.2 si 6.3/6.4 sunt versiuni modificate ale [The Logo Hijack
](https://www.teaching-materials.org/jsweb/exercises/dom_manipulation), [About Me
](https://www.teaching-materials.org/jsweb/exercises/dom_manipulation_advanced) si [The Book List
](https://www.teaching-materials.org/jsweb/exercises/dom_manipulation_advanced) gasite initial pe [teaching-materials.org](teaching-materials.org). Pentru exercitii suplimentare similare, va rog sa vizitati [teaching-materials.org](teaching-materials.org).