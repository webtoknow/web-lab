# Laborator 9 - [JS] - AJAX si randarea pe client - Partea a doua

## Cuprins

- [🦉 Introducere](#🦉-Introducere)
- [🎢 Exercitii](##🎢-Exercitii)

## 🦉 Introducere

In tabelul de mai jos avem operatiile CRUD (_Create_, _Read_, _Update_ si _Delete_) asociate cu metodele HTTP corespunzatoare:

| Operatii CRUD  | Metode HTTP | URL       | Parametrii URL | Request body | Exemple                  |
| -------------- | ----------- | --------- | -------------- | ------------ | ------------------------ |
| _Create_       | POST        | /dogs     |                | body: {...}  | POST /dogs body: {...}   |
| _Read One_     | GET         | /dogs/:id | :id            |              | GET /dogs/123            |
| _Read All_     | GET         | /dogs     |                |              | GET /dogs                |
| _Update_       | PUT         | /dogs/:id | :id            | body: {...}  | PUT /dogs/123 body:{...} |
| _Delete_       | DELETE      | /dogs/:id | :id            |              | DELETE /dogs/123         |

Metodele POST si PUT trebuie sa contine in header `Content-Type: application/json` alaturi de informatiile din `body`.

## 🎢 Exercitii

### 💪 Exercitiul 9.1

#### Pornire mock server

- Porniti JSON Server folosind comanda de mai jos (fisierul db.json a fost creat in laboratorul trecut):

```bash
json-server --watch db.json
```

- Accesand link-ul [http://localhost:3000/dogs/1](http://localhost:3000/dogs/1), daca servarul este pornit corect, veti vedea:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

### 💪 Exercitiul 9.2

#### Operatii CRUD folosind [REST](https://restfulapi.net/) pe endoint-ul /dogs

Pornind de la codul scris in cadrul laboratorului precedent:

- Adaugati in pagina voastra doua taguri [input](https://www.w3schools.com/tags/tag_input.asp) care sa contina informatiile _name_ si _img_ pentru a putea modifica lista de catei.
- Salvati noi entitati pe server - actiune de tip [POST](https://restfulapi.net/http-methods/#post) - _Create_.
- Editati entitatile existente si salvati-le pe server - actiune de tip [PUT](https://restfulapi.net/http-methods/#put) - _Update_.
- Stergeti una din entitatile existente din lista, dar si de pe server - actiune de tip [DELETE](https://restfulapi.net/http-methods/#delete) - _Delete_.
