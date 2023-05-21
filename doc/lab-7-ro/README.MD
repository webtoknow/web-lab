# Laborator 7 - [JS] - Evenimente

## Cuprins

- [🦉 Introducere](#-Introducere)
- [📹 Video](#-Video)
- [🎢 Exercitii](#-Exercitii)
- [🚀 Playground](#-Playground)

## 🦉 Introducere

[Evenimentele](https://developer.mozilla.org/en-US/docs/Web/Events) in JavaScript sunt actiuni sau intamplari care sunt declansate de utilizator sau de browser.
Sunt multe tipuri de evenimente care pot fi chemate, iar cateva dintre ele sunt:

- utilizatorul da click pe un element din pagina;
- utilizatorul pune cursorul pe un element din pagina;
- utilizatorul apasa o tasta de la tastatura;
- utilizatorul modifica marimea ferestrei browser-ului sau o inchide;
- un formular a fost trimis (submitted);
- pagina s-a terminat de incarcat;
- a aparut o eroare;

## 📹 Video

Programatorii Javascript obisnuiesc sa foloseasca des expresii precum: “event-loop”, “non-blocking”, “callback”, “asynchronous”, “single-threaded” si “concurrency”. Pentru a ne familiariza cu aceste notiuni, propun sa urmarim urmatorul video:
[Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=420s).

## 🎢 Exercitii

### 💪 Exercitiul 7.1

#### Povesti de calatorie

- Creati un document HTML (_calatorii.html_) cu template-ul de mai jos inclus in `<body>`:

```html
<h1>Povesti de calatorie</h1>
<form>
  <p>
    <label for="places">Locuri vizitate:</label>
    <input type="text" id="places" />
  </p>
  <p>
    <label for="characteristics">Caracteristici:</label>
    <input type="text" id="characteristics" />
  </p>

  <p>
    <label for="people">Persoana:</label>
    <input type="text" id="people" />
  </p>

  <button type="button" id="story-button">Creaza povestea!</button>
</form>

<p id="story"></p>
```

- Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
- Adaugati un _event listener_ butonului astfel incat de fiecare data cand este apasat functia `makeStory` sa fie apelata.
- In functia `makeStory` executati urmatoarele actiuni:

  - luati valorile din input-uri;
  - creati o poveste cu ajutorul lor (ex: "Diana a vizitat frumoasa Barcelona");
  - afisati povestea in tag-ul identificat prin id-ul _story_;

### 💪 Exercitiul 7.2

#### Calculator

- Creati un document HTML (_calculator.html_) cu template-ul de mai jos inclus in `<body>`:

```html
<h1>Calculator</h1>
<form>
  <label for="square-input">
    1. Ridicare la pătrat:
    <input type="number" id="square-input"/>
  </label>
  <button type="button" id="square-button">Calculează</button>
</form>

<form>
  <label for="half-input">
    2. Jumătate din număr:
    <input type="number" id="half-input" />
  </label>
  <button id="half-button">Calculează</button>
</form>

<form>
  <label>
    3. Procent:
    <input type="number" id="percent1-input" />
  </label>
  <label for="percent2-input">
    Număr:
    <input type="number" id="percent2-input" />
  </label>
  <button id="percent-button">Calculează</button>
</form>

<form>
  <label for="area-input">
    4. Aria unui cerc cu rază:
    <input type="number" id="area-input" />
  </label>
  <button id="area-button">Calculează</button>
</form>

<p id="solution"></p>
```

- Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
- Adaugati evenimente pe butoane astfel incat de fiecare data cand sunt apasate sa cheme functiile de calcul.
- Creati functiile care returneaza rezultatele corecte pentru toate cazurile de mai sus.
- Afisati rezultatele calculelor in tag-ul identificat prin id-ul _solution_.
- Folositi evenimentul _keypress_ pe unul dintre input-uri astfel incat utilizatorul sa nu fie nevoit sa dea click pe buton.

### 💪 Exercitiul 7.3

#### Catelus cu parul cret

- Creati un document HTML (_index.html_) cu template-ul de mai jos inclus in `<body>`:

```html
<h1>Catelus cu parul cret</h1>
<a id="buttons">
  <button type="button" id="start-button">Start</button>
  <button type="button" id="speed-button">Mai repede!</button>
  <button type="button" id="stop-button">Stop</button>
</a>
<p id="info"></p>
<img
  style="position:absolute; left: 0px; top: 80px;"
  src="https://raw.githubusercontent.com/WebToLearn/web-lab/master/doc/lab-7-ro/dog.gif"
/>

<script>
  var movePixels = 10; // numarul de pixeli
  var delayMs = 50; // numarul de milisecunde
  var dogTimer = null;

  // Muta imaginea pe ecran cu 10px
  function dogWalk() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";
    // reseteaza imaginea la pozitia de pornite
    if (currentLeft > window.innerWidth - img.width) {
      img.style.left = "0px";
    }
  }

  // Apeleaza functia dogWalk la fiecare 50 ms
  function startDogWalk() {
    dogTimer = window.setInterval(dogWalk, delayMs);
  }
</script>
```

- Mutati script-ul din documentul HTML intr-un fisier separat.
- Adaugati un eveniment pe butonul _Start_ si creati functia pentru a porni miscarea catelului.
- Adaugati un eveniment pe butonul _Stop_ si creati functia pentru a opri miscarea catelului.
- Adaugati un eveniment pe butonul _Go Faster!_ si creati functia pentru a mari viteza de miscare a catelului.
- Afisati in tag-ul identificat prin id-ul _info_ viteza de miscare, calculata in pixeli pe secunda (Viteza: 300px/secunda).
- Creati dinamic butonul _Reset speed_ cu id-ul _reset-button_.
- Adaugati un eveniment pe butonul _Reset speed_ si creati functia pentru a reseta viteza.
- Simulati functionalitatea de expirare a sesiunii astfel incat dupa 30 secunde de inactivitate (nu a fost apasat niciun buton) sa fie afisata o alerta cu mesajul "Sesiune expirata!". Folositi functia _setTimeout_.
- Dezactivati butonul _Start_ folosind atributul _disabled_ atunci cand catelul este in miscare.

### 🎁 Exercitiul 7.4

#### Catelus cu parul cret eXtreme

- Folositi _[Object literal pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)_ pentru a rescrie exerciutul anterior.

## 🚀 Playground

[Elevator Saga](https://play.elevatorsaga.com/) ne ajuta sa ne obisnuim cu functiile si evenimentele din Javascript. Pana data viitoare, sa vedem cine rezolva cele mai multe nivele!

## 💗 Recunoastere a meritelor

Exercitiile 7.1, 7.2 si 7.3 sunt versiuni modificate ale [Events - Mad Libs
](https://www.teaching-materials.org/jsweb/exercises/events), [Events - Calculator
](https://www.teaching-materials.org/jsweb/exercises/events) si [Catwalk](https://www.teaching-materials.org/jsweb/exercises/catwalk) gasite initial pe [teaching-materials.org](teaching-materials.org). Pentru exercitii suplimentare similare, va rog sa vizitati [teaching-materials.org](teaching-materials.org).