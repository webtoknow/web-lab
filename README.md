# Exercitii laborator Tehnici Web + Informatii proiecte

Un dezvoltator web are nevoie sa inteleaga in profunzime multe concepte din diverse subdomenii ale industriei IT, precum operare pe calculator, administrare servere web/Linux/Windows, retelistica si, nu in ultimul rand, limbaje de programare necesare pentru dezvoltarea aplicatiilor (HTML, CSS, Javascript, Java, PHP, Nodejs, Python etc.).

Iata aici un exemplu de ce trebuie urmarit ca [frontend developer](https://frontendchecklist.io) si [backend developer](https://www.freecodecamp.org/news/have-an-idea-want-to-build-a-product-from-scratch-heres-a-checklist-of-things-you-should-go-through-in-your-backend-software-architecture) in dezvoltarea unei aplicatii web.

## 🎢  Exercitii

Acest repository contine exercitiile pe care le vom parcurge in cadrul laboratorului de Tehnici Web.

Exercitiile sunt impartite dupa cum urmeaza:

- [Laborator 1 - [HTML] - Introducere](doc/laborator-1)
- [Laborator 2 - [CSS] - Introducere](doc/laborator-2)
- [Laborator 3 - [CSS] - Layout si Flexbox](doc/laborator-3)
- [Laborator 4 - [CSS] - CSS Grid](doc/laborator-4)
- [Laborator 5 - [JS] - Obiecte si functii](doc/laborator-5)
- [Laborator 6 - [JS] - DOM](doc/laborator-6)
- [Laborator 7 - [JS] - Evenimente si Event loop](doc/laborator-7)
- [Laborator 8 - [JS] - AJAX si randarea pe client - Partea intai](doc/laborator-8)
- [Laborator 9 - [JS] - AJAX si randarea pe client - Partea a doua](doc/laborator-9)
- [Laborator 10 - [NodeJS] - Introducere](doc/laborator-10)
- [Laborator 11 - [NodeJS] - CRUD API](doc/laborator-11)
- [Laborator 12 - [NodeJS] - Randare pe server](doc/laborator-12)
- Laborator 13 - Prezentare proiecte
- Laborator 14 - Workshop Frontend
  - [Workshop Angular](doc/workshop-angular-laborator-11-12)
  - [Workshop React](doc/workshop-react-laborator-11-12)

### 🦉 Iconite ajutatoare

- 🦉 - "Bufnita Atena" ne aduce informatiile necesare pentru rezolvarea exercitiilor
- 🚀 - "Racheta Musk" ne arata ca e timpul sa ne jucam
- 🎢 - "Caruselul Kody" ne indica zona unde se afla exercitiile
- 💪 - "Domnul Muschi" marcheaza exercitiile pe care trebuie sa le rezolvam
- 🎁 - "Cadoul Bonus" ne ajuta sa ne depasim limitele cu exercitii avansate

### Cerinte

Pentru efectuarea exercitiilor de laborator este nevoie de:

- un text editor, ca de exemplu:
  - [Visual Studio Code](https://code.visualstudio.com/Download)
  - [Atom](https://atom.io)
  - [Brackets](http://brackets.io/)
- [Nodejs](https://nodejs.org/en/) instalat pe calculator

## Informatii laborator si proiect

Punctajul maxim care poate fi obtinut in cadrul laboratorului este de 40 puncte: 10 puncte activitate laborator si 30 puncte proiect.
Punctajul minim de intrare in examen este 20 puncte.

### Activitate laborator (maxim 10 puncte)

Punctele pentru activitatea din cadrul laboratorului se pot obtine astfel:

a. minim 10 prezente (maxim 5 puncte)

b. toate laboratoarele rezolvate (maxim 5 puncte)

c. rezolvarea tuturor exercitiilor (fara proiecte) de pe [Free Code Camp](https://www.freecodecamp.org/learn), pana in saptamana 7, din sectiunile:

- Responsive Web Design Certification (3 puncte)
- JavaScript Algorithms and Data Structures Certification (3 puncte)

d. maxim 2 prezentari tehnice (in Power Point sau un program similar) de 5-7 minute legate de cate o problema intampinata la proiect (maxim 2 puncte/prezentare)

e. raspuns la intrebarile bonus adresate pe parcurs (2 puncte/raspuns corect)

> Se acorda punctaje partiale **doar** pentru a, b si d.

### Proiect (maxim 30 puncte)

**Tema:** Construiti o aplicatie web care respecte criteriile de acceptanta si cerintele de mai jos. Tematica site-ului este la libera alegere.

**Criterii de acceptanta:**

- aplicatia sa fie [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)
- codul sursa (nearhivat) al proiectului trebuie sa fie salvat pe [GitHub](https://github.com/)
- nu puteti folosi librarii, framework-uri [CSS](https://en.wikipedia.org/wiki/CSS_framework) sau [JavaScript](https://en.wikipedia.org/wiki/JavaScript_framework) (cum ar fi jQuery, Bootstrap, Angular, React, etc) pentru realizarea frontend-ului

> **Atentie!** Orice proiect care nu respecta criteriile de acceptanta este evaluat la 0 puncte.

#### Frontend (maxim 17 puncte)

##### HTML si CSS (maxim 8 puncte)

- Fisiere separate pentru HTML si CSS (0.5 puncte)
- In interiorul documentelor HTML, sa se foloseasca minim 4 [taguri semantice](https://www.w3schools.com/html/html5_semantic_elements.asp) (1 punct)
- Stilurile CSS sa fie definite folosind clase direct pe elementele care trebuie stilizate (minim 80% din selectori) (0.5 punct)
- Layout-ul sa fie impartit in minim 2 coloane si sa fie realizat cu [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) si/sau [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (2 puncte)
- Site-ul sa fie [responsive](https://www.w3schools.com/html/html_responsive.asp), respectand rezolutiile urmatoarelor dispozitive folosind [media queries](https://www.uxpin.com/studio/blog/media-queries-responsive-web-design/): (4 puncte)
  - telefon mobil - latime mai mica 768px
  - tableta - latime intre 768px si 1280px
  - desktop - latime mai mare de 1280px

##### Javascript (maxim 9 puncte)

- Fisier separat JavaScript (0.5 puncte)
- Manipularea DOM-ului (crearea, editarea si stergerea elementelor/nodurilor HTML) (3 puncte)
- Folosirea evenimentelor JavaScript declansate de mouse/tastatura (1 punct)
- Utilizarea [AJAX](https://www.w3schools.com/xml/ajax_intro.asp) ([GET, POST, PUT, DELETE](http://www.restapitutorial.com/lessons/httpmethods.html)) (4 puncte)
- Folosirea localStorage (0.5 puncte)

#### Backend API (maxim 8 puncte)

- Creare server Backend (2 puncte)
- CRUD API (Create, Read, Update si Delete) pentru a servi Frontend-ului (6 puncte)

#### Punctaj subiectiv (maxim 5 puncte)

Ne vom imagina ca aplicatia trebuie prezentata unui client, care va aprecia, de exemplu:

- calitatea sustinerii prezentarii proiectului
- designul (sa arate placut si ingrijit)
- utilitatea (sa rezolve probleme reale)
- stabilitatea (sa NU contina defecte evidente)
- complexitatea (sa aiba mai multe ecrane, layout-ul sa fie mai complex etc.)

> Pana in saptamana 12 inclusiv, studentii pot veni cu intrebari legate de proiect pentru a fi ajutati. Dupa aceea, criteriile de acceptanta si cerintele vor fi considerate ca fiind intelese pe deplin.
