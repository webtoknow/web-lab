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