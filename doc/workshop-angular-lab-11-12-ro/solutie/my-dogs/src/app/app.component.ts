import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dog } from './models/dog';
import { DogsService } from './services/dogs.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  dogs: Dog[] = [];
  getDogSubscription = new Subscription();
  deleteDogSubscription = new Subscription();
  displayedColumns: string[] = ['name', 'img', 'actions']
  
  constructor(
    private dogsService: DogsService,
    private dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.getDogSubscription = this.dogsService.getDogs().subscribe((response) => {
      this.dogs = response;
    })
  }

  deleteDog(id: number) {
    this.deleteDogSubscription = this.dogsService.deleteDog(id).subscribe(() => {
      this.getDogs();
    });
  }

  addDog() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '650px',
      data: { name: '', img: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDogs();
    });
  }

  editDog(dog: Dog) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '650px',
      data: { ...dog }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDogs();
    });
  }

  ngOnDestroy(): void {
    this.getDogSubscription.unsubscribe();
    this.deleteDogSubscription.unsubscribe();
  }

}