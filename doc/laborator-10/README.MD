# Laborator 10 - Events

[Evenimentele](https://developer.mozilla.org/en-US/docs/Web/Events) in JavaScript sunt actiuni sau intamplari care sunt declansate de utilizator sau de browser.
Sunt multe tipuri de evenimente care sunt chemate, iar cateva dintre ele sunt:

* utilizatorul da click pe un element din pagina;
* utilizatorul pune cursorul pe un element din pagina;
* utilizatorul apasa o tasta de la tastatura;
* utilizatorul modifica marimea ferestrei browser-ului sau o inchide;
* un formular a fost trimis (submitted);
* pagina s-a terminat de incarcat;
* a aparut o eroare;

## Exercitiul 10.1

### Povesti de calatorie

* Creati un document HTML (*calatorii.html*) cu template-ul de mai jos inclus in `<body>`:

```html
<h1>Povesti de calatorie</h1>

 <ul>
  <li>Locuri vizitate: <input type="text" id="places">
  <li>Adjective: <input type="text" id="adjective">
  <li>Nume: <input type="text" id="person">
 </ul>

 <button id="story-button">Creaza povestea!</button>

 <div id="story"></div>
```

* Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
* Adaugati un *event listener* butonului astfel incat de fiecare data cand este apasat functia `makeStory` sa fie apelata.
* In functia `makeStory` executati urmatoarele actiuni:

  * luati valorile din input-uri;
  * creati o poveste cu ajutorul lor (ex: "Diana a vizitat frumoasa Barcelona");
  * afisati povestea in tag-ul identificat prin id-ul *story*;

## Exercitiul 10.2

### Calculator

* Creati un document HTML (*calculator.html*) cu template-ul de mai jos inclus in `<body>`:

```html
 <label>1. Ridicare la patrat:
    <input type="number" id="square-input" size="2">
  </label>
  <button id="square-button">Calculeaza</button>
  <br><br>

  <label>2. Jumatate din numar:
    <input type="number" id="half-input" size="2">
  </label>
  <button id="half-button">Calculeaza</button>
  <br><br>

  <label>
    3. Procent:
    <input type="number" id="percent1-input" size="2">
  </label>
  <label>
    Numar:
    <input type="number" id="percent2-input" size="2">
  </label>
  <button id="percent-button">Calculeaza</button>
  <br><br>

  <label>4. Aria unui cerc cu raza:
    <input type="number" id="area-input" size="2">
  </label>
  <button id="area-button">Calculeaza</button>
  <br><br>
  <div id="solution"></div>
```

* Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
* Adaugati evenimente pe butoane astfel incat de fiecare data cand sunt apasate sa cheme functiile de calcul.
* Creati functiile care returneaza rezultatele corecte pentru toate cazurile de mai sus.
* Afisati rezultatele calculelor in tag-ul identificat prin id-ul *solution*.

### Bonus

* Folositi evenimentul *keypress* pe unul dintre input-uri astfel incat utilizatorul sa nu fie nevoit sa dea click pe buton.