import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StocksComponent } from '../stocks/stocks.component';
import { Order, UserData } from 'src/app/models/models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  constructor(
    public dialogRef: MatDialogRef<StocksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clear(event){
    event.target.value = ''
  }
}