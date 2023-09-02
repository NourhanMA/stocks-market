import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { IStocks, Order, UserData } from 'src/app/models/models';
import { StocksServiceService } from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent {
  title: string = "Stocks";
  newOrderData: Order
  stocks: IStocks[] = []

  constructor(public dialog: MatDialog, private stockService: StocksServiceService) {
    this.newOrderData = { id: 0, price: 0, quantity: 0, userName: '', stockName: '' }
  }

  ngOnInit(): void {
    this.getStocks()
  }

  ngOnDestroy(): void {
  }

  getStocks() {
    this.stockService.getStocks().subscribe(stocks => {
      this.stocks = stocks;
      // console.log(this.stocks)
    });
  }

  openDialog(stock): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      disableClose: true,
      data: { name: this.newOrderData.userName, quantity: this.newOrderData.quantity },
    });

    dialogRef.afterClosed().subscribe(result => {
      result != null ? (this.newOrderData = {
        id: stock.id,
        stockName: stock.stockName,
        price: stock.price,
        userName: result.userName,
        quantity: result.quantity
      }, this.stockService.addOrder(this.newOrderData),
      this.newOrderData = { id: 0, price: 0, quantity: 0, userName: '', stockName: '' }
      ) : ''
    });
  }

}
