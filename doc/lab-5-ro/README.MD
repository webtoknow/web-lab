# Laborator 5 - [JS] - Obiecte si functii

## Cuprins

- [🦉 Introducere](#-Introducere)
- [🎢 Exercitii](#-Exercitii)

## 🦉 Introducere

[JavaScript](https://ro.wikipedia.org/wiki/JavaScript) (JS) este unul dintre cele mai populare limbaje de programare din lume, fiind utilizat atat pe partea de client ([browser](https://en.wikipedia.org/wiki/Web_browser)) cat si pe partea de server ([NodeJs](https://nodejs.org/en/)).

## 🎢 Exercitii

### 💪 Exercitiul 5.1

Intr-un document HTML, link-uiti cate un fisier JavaScript pentru fiecare exercitiu de mai jos (_ex1.js_, _ex2.js_ etc.).

### 💪 Exercitiul 5.2

### Care sunt oamenii care v-au influentat viata?

- Creati un obiect care sa contina informatiile unei persoane ce v-a influentat viata. Obiectul trebuie sa contina: `nume` (string), `varsta` (number) si `calitati` (array of strings).
- Afisati in consola pe linii separate (cate un `console.log` pentru fiecare linie), informatiile persoanei, ca mai jos:

```JS
Gabriela Boboc
Varsta: 50
Calitati:
Empatica
Sincera
Iubitoare de animale
```

### 💪 Exercitiul 5.3

### E ca IMDB-ul, dar mult mai mic...

- Creati un obiect care sa contina informatiile unui film favorit. Obiectul trebuie sa includa `titlu` (string), `durata` (number) si `actori` (array of strings).
- Creati o functie care sa primeasca ca parametru obiectul de mai sus si sa printeze in consola informatiile filmului favorit, ca mai jos:

```bash
"La Moara cu noroc" a durat 130 minute. Actori: Constantin Codrescu, Olga Tudorache, Geo Barton"
```

### 💪 Exercitiul 5.4

### E Black Friday!

- Creati o functie care sa primeasca ca parametru obiectul corespunzator cosului de cumparaturi si sa returneze valoarea totala a acestuia, ca in exemplul de mai jos:

```JS
// Input
var blackFridayCart = {
  telefon: "350",
  consola: "250",
  televizor: "450",
  iepurasPlus: "10.60",
  cercei: "20.34",
  geanta: "22.36"
};

// Output
getCartValue(blackFridayCart); // 1103.3
```

## 🎁 Exercitiul 5.5

### Map

- Implementati functia _[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)_ care creeaza un nou vector (array) continand rezultatele executiei unei functii date (callbackFunction) pentru fiecare element.

```JS
Array.prototype.myMap = function(callbackFunction) {
  const array = this;
  let newArray = [];
  // codul tau aici
  return newArray
}

function multiplicator(element) {
    return 2 * element;
}

[1,2,3].map(multiplicator); // [2,4,6]
[1,2,3].myMap(multiplicator); // [2,4,6]
```

## 🎁 Exercitiul 5.6

### Filter

- Implementati functia _[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)_ care creeaza un nou vector (array) continand elementele care trec testul dat de o functie (callbackFunction):

```JS
Array.prototype.myFilter = function(callbackFunction) {
  const array = this;
  let newArray = [];
  // codul tau aici
  return newArray
}

function biggerThanFive(element) {
    return element > 4;
}

[1,2,3,4,5,6,7,8,9].filter(biggerThanFive); // [5,6,7,8,9]
[1,2,3,4,5,6,7,8,9].myFilter(biggerThanFive); // [5,6,7,8,9]
```

## 🎁 Exercitiul 5.7

### Reduce

- Implementati functia _[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)_ care executa o functie `reducer` pe fiecare element din vector rezultand la final o singura valoare.

```JS
Array.prototype.myReduce = function(callbackFunction, initialVal) {
  const array = this;
  let accumulator = (initialVal === undefined) ? undefined : initialVal;
  // codul tau aici
  return accumulator
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

[1,2,3,4].reduce(reducer); // 10
[1,2,3,4].myReduce(reducer); // 10
```
## 💗 Recunoastere a meritelor

Exercitiile 5.2, 5.3 si 5.4 sunt versiuni modificate ale [The Recipe Card
](https://www.teaching-materials.org/javascript/exercises/objects), [Objects as Arguments
](https://www.teaching-materials.org/javascript/exercises/objectarguments) si [The Cash Register
](https://www.teaching-materials.org/javascript/exercises/cashregister) gasite initial pe [teaching-materials.org](teaching-materials.org). Pentru exercitii suplimentare similare, va rog sa vizitati [teaching-materials.org](teaching-materials.org).
