# Laborator 9 - [JS] - AJAX - Partea a doua

## Exercitiul 9.1

### Start my server

- Porniti JSON Server folosind comanda de mai jos:

```bash
json-server --watch db.json
```

- Accesand link-ul [http://localhost:3000/dogs/1](http://localhost:3000/dogs/1), veti vedea:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## Exercitiul 9.2

### Dogs

Pornind de la codul scris in cadrul laboratorului precedent:

- Adaugati in pagina voastra doua taguri [input](https://www.w3schools.com/tags/tag_input.asp) care sa contina informatiile _name_ si _img_ pentru a putea modifica lista de catei.
- Salvati entitatile pe server - actiune de tip [POST](https://spring.io/understanding/REST#post).
- Editati entitatile existente si salvati-le pe server - actiune de tip [PUT](https://spring.io/understanding/REST#put).
- Stergeti una din entitatile existente din lista si de pe server - actiune de tip [DELETE](https://spring.io/understanding/REST#delete).
