# Laborator 7 - [JS] - Obiecte si functii

Intr-un document HTML, link-uiti cate un fisier JavaScript pentru fiecare exercitiu de mai jos (*ex1.js*, *ex2.js* etc.).

## Exercitiul 7.1

### Care sunt oamenii care v-au influentat viata?

* Creati un obiect care sa contina informatiile unei persoane ce v-a influentat viata. Obiectul trebuie sa contina: `nume` (string), `varsta` (number) si `calitati` (array of strings).
* Afisati in consola pe linii separate (cate un `console.log` pentru fiecare linie), informatiile persoanei, ca mai jos:

```JS
Gabriela Boboc
Varsta: 50
Calitati:
Empatica
Sincera
Iubitoare de animale
```

## Exercitiul 7.2

### E ca IMDB-ul, dar mult mai mic...

* Creati un obiect care sa contina informatiile unui film favorit. Obiectul trebuie sa includa `titlu` (string), `durata` (number) si `actori` (array of strings).
* Creati o functie care sa primeasca ca parametru obiectul de mai sus si sa printeze in consola informatiile filmului favorit, ca mai jos:

```bash
"La Moara cu noroc" a durat 130 minute. Actori: Constantin Codrescu, Olga Tudorache, Geo Barton"
```

## Exercitiul 7.3

### E Black Friday!

* Creati o functie care sa primeasca ca parametru obiectul corespunzator cosului de cumparaturi si sa returneze valoarea totala a acestuia, ca in exemplul de mai jos:

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
getCartValue(blackFridayCart)); // 1103.3
```

## Exercitiul 7.4

### Map

* Implementati functia *map*, astfel incat aceasta sa se comporte ca mai jos:

```JS
function multiplicator(element) {
    return 2 * element;
}

[1,2,3].map(multiplicator); // [2,4,6]
```