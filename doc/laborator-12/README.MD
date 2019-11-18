# Laborator 12 - [NodeJS] - API

We can map basic operations like CRUD to certain HTTP methods:

| CRUD Operation | HTTP method	| URL       | URL params | Request body     | example                       |
|----------------|--------------|-----------|------------|------------------|-------------------------------|
| Create         | POST         | /dogs     |            | body: {...}      | POST /dogs body: {...}        |
| Read One       | GET          | /dogs/:id | :id        |                  | GET /dogs/123                 |
| Read All       | GET          | /dogs     |            |                  | GET /dogs                     |
| Update         | PUT          | /dogs/:id | :id        | body: {...}      | PUT /dogs/123 body:{...}      |
| Delete         | DELETE       | /dogs/:id | :id        |                  | DELETE /dogs/123              |
