# Laborator 12 - [NodeJS] - Redarea dinamica a continutului pe server - Server side rendering

## Cuprins

- [🦉 Introducere](#-Introducere)
- [🎢 Exercitii](#-Exercitii)
- [📹 Video](#-Video)

## 🦉 Introducere

Redarea dinamica a continutului pe server a unei pagini web a existat de la inceputul internetului, mai exact de cand au aparut primele servere web care puteau sa ruleze Java, PHP, Python sau Ruby.

![Server side Rendering](Server-side-rendering-animation.gif)

In animatia de mai sus este prezentat modul de comunicare dintre client (browser) si server cand se reda continutul dinamic pe server:

 1. Browser-ul face prima cerere catre server pentru a aduce documentul HTML;

 2. Server-ul interogheaza baza de date si extrage continutul paginii;

 3. Server-ul, cu ajutorul unui motor de redare (template engine), creeaza documentul HTML cu informatiile din baza de date;

 4. Server-ul raspunde cu documentul HTML;

 5. Browser-ul parseaza HTML-ul;

 6. Browser-ul face noi cereri pentru fisierele cu referinta in HTML;

 7. Server-ul raspunde cu fisierele CSS si Javascript cerute;

 8. Browser-ul reda continutul paginii.

## 🎢 Exercitii

### 💪 Exercitiul 12.1

Pentru a ne putea familiariza cu aceasta modalitate de servire a continutului si, totodata, cu autentificarea prin sesiune, in laboratorul de astazi o sa rezolvam exercitiile din sectiunea _Advanced Node and Express Challenges_ de pe platforma [Free Code Camp](https://www.freecodecamp.org/learn/information-security-and-quality-assurance/advanced-node-and-express/).

## 📹 Video

Am ajuns la final, dar acesta este doar inceputul 😈, deoarece programarea web necesita o invatare continua de concepte si tehnologii noi. Totodata, ca programator web vei interactiona cu multe alte meserii, incepand cu analiza de bussiness si terminand cu ingineria de sistem. Pentru a ne face o idee despre care sunt etapele de dezvoltare ale unei aplicatii enterprise si ce roluri participa la contruirea acesteia, v-am pregatit videoclipul [Cum faci o aplicatie web? | Etapele de dezvoltare](https://www.youtube.com/watch?v=_hJXIVPQhDo).
