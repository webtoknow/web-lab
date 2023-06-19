# Aplicatia "My dogs" cu Angular

Acest tutorial va oferi o introducere privind lucrul cu API-uri REST și Angular, acoperind conceptele și tehnicile cheie necesare pentru construirea aplicațiilor pentru a crea, citi, modifica și șterge (CREATE, READ, UPDATE și DELETE) date de pe un server. Mai exact, vom gestiona o listă de câini de pe un server. 🐶🐕🐶🐕

## Cuprins
- [Instalare Nodejs](#instalare-nodejs)
- [Pornirea server-ului de backend](#pornirea-server-ului-de-backend)
- [Crearea aplicatiei](#crearea-aplicatiei)
- [Adaugarea librariei Material-UI](#adaugarea-librariei-material-ui)
- [Eliminarea codului inutil](#eliminarea-codului-inutil)
- [Aducerea datelor de la server](#aducerea-datelor-de-la-server)
- [Afisarea listei de catei](#afisarea-listei-de-catei)
- [Stilizarea listei de catei](#stilizarea-listei-de-catei)
- [Stergerea unui element din lista de catei](#stergerea-unui-element-din-lista-de-catei)
- [Adaugarea si editarea unui element din lista de catei](#adaugarea-si-editarea-unui-element-din-lista-de-catei)

# Instalare Nodejs

> Săriți acestă sectiune dacă aveți Nodejs instalat pe calculator.

Pentru a instala Node.js pe Windows, puteți descărca fisierul de instalare de pe [site-ul Node.js](https://nodejs.org/en/download/) și urmați instrucțiunile pentru a instala ultima versiune de Node.js pe sistemul dvs.

Pentru a instala Node.js pe Linux, puteți utiliza un manager de pachete precum apt-get sau yum. De exemplu, pentru a instala Node.js pe Ubuntu folosind apt-get, puteți rula următoarele comenzi:

```bash
sudo apt-get update
sudo apt-get install nodejs
```

Pentru a instala Node.js pe MacOS, puteți utiliza managerul de pachete Homebrew. În primul rând, va trebui să instalați Homebrew executând următoarea comandă:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

După ce Homebrew este instalat, puteți folosi pentru a instala Node.js executând următoarea comandă:

```bash
brew install node
```

După ce Node.js este instalat, puteți verifica instalarea executând comanda node -v, care ar trebui să afișeze versiunea instalată de Node.js. De asemenea, puteți utiliza comanda npm pentru a gestiona pachetele și dependențele pentru proiectele dumneavoastră Node.js.

## Pornirea server-ului de backend

JSON-server este o librarie bazată pe Node.js pentru crearea rapidă a unui server `mock` care poate fi utilizat în scopuri de testare și dezvoltare. Este conceput să fie ușor de utilizat și configurat și oferă o modalitate simplă de a crea un API REST prin definirea datelor într-un fișier db.json.

Pentru a porni un server folosind [JSON Server](https://github.com/typicode/json-server), va trebui să instalați pachetul JSON-server din `npm`. Puteți face acest lucru rulând următoarea comandă:

```bash
npm install -g json-server
```

Creati un fisier `db.json` avand continutul de mai jos:

```json
{
  "dogs": [
    {
      "id": 1,
      "name": "AFFENPINSCHER",
      "img": "https://images.dog.ceo/breeds/affenpinscher/n02110627_8099.jpg"
    },
    {
      "id": 2,
      "name": "AKITA",
      "img": "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg"
    },
    {
      "id": 3,
      "name": "CHIHUAHUA",
      "img": "https://images.dog.ceo/breeds/chihuahua/n02085620_7613.jpg"
    },
    {
      "id": 4,
      "name": "LHASA",
      "img": "https://images.dog.ceo/breeds/lhasa/n02098413_7358.jpg"
    },
    {
      "id": 5,
      "name": "HOUND",
      "img": "https://images.dog.ceo/breeds/hound-afghan/n02088094_2626.jpg"
    }
  ]
}
```

Porniti `JSON Server` folosind comanda de mai jos:

```bash
json-server --watch db.json -p 4000
```

Accesand link-ul [http://localhost:4000/dogs/1](http://localhost:4000/dogs/1), veti vedea:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## Crearea aplicatiei

Creati proiectul folosind interfata de comanda [Angular CLI](https://cli.angular.io/).

```bash
npm install -g @angular/cli
ng new my-dogs
```

```bash
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict No
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
```

```bashcd my
cd my-dogs
ng serve
```

Accesand link-ul [http://localhost:4200](http://localhost:4200), veti putea vedea aplicatia voastra Angular.

## Adaugarea librariei Material-UI

[Material-UI](https://material.angular.io/guide/getting-started) este libraria de componente de la Google, pe care o putem instala folosind Angular CLI:

```sh
ng add @angular/material
```

Selectam optiunea "YES" la toate intrebarile din timpul instalarii.

```sh
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Yes
```

Observam ca toate dependentele sale s-au salvat in `package.json`.

## Eliminarea codului inutil

Sa inlaturam din componenta nou creata `app.component.html` tot html-ul.

## Aducerea datelor de la server

Cream o noua clasa in directorul `models` => `src/app/models`:

```bash
ng generate class dog
```

unde o sa punem modelul listei de catei:

```js
  export class Dog {
    id?: number;
    name: string = '';
    img: string = '';
  }
```

Cream un nou serviciu in directorul `services` => `src/app/services`:

```bash
ng generate service dogs
```

cu toate metodele noastre CRUD:

```js
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Dog } from 'src/app/models/dog';;

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) {
  }

  getDogs() {
    return this.http.get('http://localhost:4000/dogs') as Observable<Dog[]>
  }

  addDog(postObject: Dog) {
    return this.http.post('http://localhost:4000/dogs', postObject) as Observable<Dog>
  }

  updateDog(postObject: Dog) {
    return this.http.put(`http://localhost:4000/dogs/${postObject.id}`, postObject) as Observable<Dog>
  }

  deleteDog(id: number) {
    return this.http.delete(`http://localhost:4000/dogs/${id}`) as Observable<{}>
  }
}
```

In tabelul de mai jos avem operatiile [CRUD](https://www.codecademy.com/articles/what-is-crud) (_Create_, _Read_, _Update_ si _Delete_) asociate cu metodele HTTP corespunzatoare:

| CRUD Operation | HTTP method | URL       | URL params | Request body | example                  |
| -------------- | ----------- | --------- | ---------- | ------------ | ------------------------ |
| _Create_       | POST        | /dogs     |            | body: {...}  | POST /dogs body: {...}   |
| _Read One_     | GET         | /dogs/:id | :id        |              | GET /dogs/123            |
| _Read All_     | GET         | /dogs     |            |              | GET /dogs                |
| _Update_       | PUT         | /dogs/:id | :id        | body: {...}  | PUT /dogs/123 body:{...} |
| _Delete_       | DELETE      | /dogs/:id | :id        |              | DELETE /dogs/

Nu uitati sa adaugati in `app.module.ts` `HttpClientModule` folosit in serviciul nostru

```js
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In componenta noastra `app.component.ts` avem nevoie de o variabila care sa stocheze aceasta lista, totodata ne trebuie un nou `Subscription` pentru requestul care il facem catre server:

```js
  ...
  export class AppComponent implements OnInit {
  dogs: Dog[] = [];
  getDogSubscription = new Subscription();
  ...
```

Aducem lista de catei cu ajutorul unui request de tip `GET`:

```js
  getDogs() {
    this.getDogSubscription = this.dogsService.getDogs().subscribe((response) => {
      this.dogs = response;
    })
  }
```

Apelam functia creata anterior in momentul in care se initializeaza componenta:

```js
  componentDidMount() {
    this.getDogs();
  }
```

Apoi, facem unsubscribe:

```js
  ngOnDestroy(): void {
    this.getDogSubscription.unsubscribe();
  }
```

## Afisarea listei de catei

Folosim tabelul dat ca exemplu in [Material-UI](https://material.angular.io/components/table/overview) pentru a afisa lista de catei:

```html
<table mat-table [dataSource]="dogs" class="mat-elevation-z8">

  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <ng-container matColumnDef="img">
    <th mat-header-cell *matHeaderCellDef> Image </th>
    <td mat-cell *matCellDef="let element"> <img class="img" [attr.src]="element.img" [attr.alt]="element.name"> </td>
  </ng-container>

    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef> Action </th>
      <td mat-cell *matCellDef="let element"> 
        <button class="editButton" mat-raised-button color="primary">Editare</button>
        <button mat-raised-button color="primary">Stergere</button>
      </td>
    </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```

Cream o noua variabila in componenta pentru a stoca numele coloanelor:

```js
  ...
  dogs: Dog[] = [];
  getDogSubscription = new Subscription();
  displayedColumns: string[] = ['name', 'img', 'actions']
  ...
```

Nu uitati sa adaugati in `app.module.ts` modulele `MatTableModule` si `MatButtonModule` necesare in pagina noastra:

```js
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Pentru fiecare catel afisam numele, imaginea si butoanele de actiuni: *Editeaza* si *Sterge*.

## Stilizarea listei de catei

Pentru a imbunatati designul, adaugam stilurile urmatoare in `app.component.css`:

```css
.img {
  height: 150px;
}

table {
  width: 100%;
}

.addButton {
  margin: 10px;
}

.editButton {
  margin-right: 20px;
}
```

## Stergerea unui element din lista de catei

Stergem un element din lista de catei cu ajutorul unui request de tip `DELETE`:

Primul lucru care trebuie sa il faceti este sa adaugati un nou `Subscription` in `app.component.ts` pentru requestul de DELETE care il facem catre server:

```js
export class AppComponent implements OnInit, OnDestroy {
  ...
  deleteDogSubscription = new Subscription();
  ...
```

Apoi, adaugati metoda de stergere:
```js
  deleteDog(id: number) {
    this.deleteDogSubscription = this.dogsService.deleteDog(id).subscribe(() => {
      this.getDogs()
    });
  }
```

si in `app.component.html` evenimentul pe buton:

```html
  <button mat-raised-button color="primary" (click)="deleteDog(element.id)">Stergere</button>
```

Nu uitati de unsubscribe:

```js
 ngOnDestroy(): void {
    ...
    this.deleteDogSubscription.unsubscribe();
  }
```

## Adaugarea si editarea unui element din lista de catei

Inserati butonul de *Adaugare* deasupra tabelului in `app.component.html`:

```html
  <button mat-raised-button class="addButton" (click)="addDog()">Adaugare</button>
  <table mat-table [dataSource]="dogs" class="mat-elevation-z8">
...
```

Apoi, in `app.component.ts` inserati functiile care vor adauga sau edita cateii deschizand o modala continand un formular:

```js
  addDog() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '650px',
      data: { name: '', img: '' }
    });
     this.dialogRefSubscription = dialogRef.afterClosed().subscribe(() => {
      this.getDogs();
    });
  }
```

```js
  editDog(dog: Dog) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '650px',
      data: { ...dog }
    });
    this.dialogRefSubscription = dialogRef.afterClosed().subscribe(() => {
      this.getDogs();
    });
  }
```

```js
export class AppComponent implements OnInit, OnDestroy {
  dogs: Dog[] = [];
  getDogSubscription = new Subscription();
  deleteDogSubscription = new Subscription();
  dialogRefSubscription = new Subscription();
  ...
  ngOnDestroy(): void {
    ...
    this.dialogRefSubscription.unsubscribe();
  }
```

Sa nu uitati sa injectati `MatDialog` in constructor. Mai multe detalii gasiti la [Angular material's Dialog](https://material.angular.io/components/dialog/overview):
```js
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';
....
constructor(
    private dogsService: DogsService,
    private dialog: MatDialog
    ) {
  }
```

Creati o noua component *form* in directorul `components` => `src/app/components` care va contine inputurile si logica de salvare:

```bash
ng generate component form
```

```html
<div mat-dialog-content class="container">
  <mat-form-field>
    <input matInput [(ngModel)]="data.name" placeholder="Name">
  </mat-form-field>
  <mat-form-field>
    <input matInput [(ngModel)]="data.img" placeholder="Image url">
  </mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="closeModal()">Anulare</button>
  <button mat-button cdkFocusInitial (click)="saveDog()">Save</button>
</div>
```

Adaugati un catel nou si faceti update la informatiile unui catel cu ajutorul metodei saveDog si a request-urilor de tip `POST` si `PUT` in `form.component.ts`:

```js
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Dog } from 'src/app/models/dog';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnDestroy {

  updateDogSubscription = new Subscription();
  addDogSubscription = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    private dogsService: DogsService,
    @Inject(MAT_DIALOG_DATA) public data: Dog
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  saveDog() {
    if (this.data.id) {
      this.updateDogSubscription = this.dogsService.updateDog(this.data).subscribe(() => {
        this.dialogRef.close();
      })
    }
    else {
      this.addDogSubscription = this.dogsService.addDog(this.data).subscribe(() => {
        this.dialogRef.close();
      })
    }
  }

  ngOnDestroy() {
    this.addDogSubscription.unsubscribe();
    this.updateDogSubscription.unsubscribe();
  }
}
```

Stilizati modala adaugand in `form.component.css` stilurile de mai jos:

```css
.container {
  display: flex;
  flex-direction: column;
}

.container > * {
  width: 100%;
}
```

Pentru ca totul sa functioneze, `app.module.ts` trebuie sa arate ca mai jos:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Si ultimul lucru, adaugati evenimentele de click pe butoanele de add si edit in componenta principala `app.component.html`:

```html
<button mat-raised-button class="addButton" (click)="addDog()">Adaugare</button>
...
<button class="editButton" mat-raised-button color="primary" (click)="editDog(element)">Editare</button>
...
```
