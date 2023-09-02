import { Component } from '@angular/core';
import { IStocks, Order } from 'src/app/models/models';
import { StocksServiceService } from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orders: Order[] = [];
  newOrder: Order = { id: 0, price: 0, quantity: 0, userName: '', stockName: '' };
  stocks: IStocks[] = []

  constructor(private stockService: StocksServiceService) { }

  ngOnInit(): void {
    this.orders = this.stockService.getOrders();
    this.getStocks()
  }

  addOrder() {
    if (this.newOrder.userName && this.newOrder.id && this.newOrder.quantity) {
      this.stocks.filter(el => {
        el.id == this.newOrder.id ? (this.newOrder.stockName = el.stockName, this.newOrder.price = el.price) : ""
      })
      this.stockService.addOrder(this.newOrder);
      this.newOrder = { id: 0, price: 0, quantity: 0, userName: '', stockName: '' };
    }
  }

  getStocks() {
    this.stockService.getStocks().subscribe(stocks => {
      this.stocks = stocks;
    });
  }

  selectedStock(event) {
    this.stocks.filter(el => {
      el.id == event.target.value ? (this.newOrder.stockName = el.stockName, this.newOrder.price = el.price) : ""
    })
  }

  clear(event) {
    event.target.value = ''
  }

}
