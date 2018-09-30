# Laborator 12 - [JS] - AJAX - Partea a doua

## Exercitiul 12.1

### Start my server

* Porniti JSON Server folosind comanda de mai jos:

```bash
json-server --watch db.json
```

* Accesand link-ul [http://localhost:3000/dogs/1](http://localhost:3000/dogs/1), veti vedea:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## Exercitiul 12.2

### Dogs

Pornind de la codul scris in cadrul laboratorului precedent:

* Creati un formular care sa contina campurile *name* si *img* pentru a adauga noi entitati in lista de catei.
* Salvati entitatile pe server - actiune de tip [POST](https://spring.io/understanding/REST#post).
* Editati entitatile existente si salvati-le pe server - actiune de tip [PUT](https://spring.io/understanding/REST#put).
* Stergeti una din entitatile existente din lista si de pe server - actiune de tip [DELETE](https://spring.io/understanding/REST#delete).