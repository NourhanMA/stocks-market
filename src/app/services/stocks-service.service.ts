import { Injectable } from '@angular/core';
import { IStocks, Order } from '../models/models';

import { BehaviorSubject, interval } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StocksServiceService {

  private stocks: IStocks[] =
    [
      {
        "id": 1,
        "stockName": "Vianet",
        "price": 0
      },
      {
        "id": 2,
        "stockName": "Agritek",
        "price": 0
      },
      {
        "id": 3,
        "stockName": "Akamai",
        "price": 0
      },
      {
        "id": 4,
        "stockName": "Baidu",
        "price": 0
      },
      {
        "id": 5,
        "stockName": "Blinkx",
        "price": 0
      },
      {
        "id": 6,
        "stockName": "Blucora",
        "price": 0
      },
      {
        "id": 7,
        "stockName": "Boingo",
        "price": 0
      },
      {
        "id": 8,
        "stockName": "Brainybrawn",
        "price": 0
      },
      {
        "id": 9,
        "stockName": "Carbonite",
        "price": 0
      },
      {
        "id": 10,
        "stockName": "China Finance",
        "price": 0
      },
      {
        "id": 11,
        "stockName": "ChinaCache",
        "price": 0
      },
      {
        "id": 12,
        "stockName": "ADR",
        "price": 0
      },
      {
        "id": 13,
        "stockName": "ChitrChatr",
        "price": 0
      },
      {
        "id": 14,
        "stockName": "Cnova",
        "price": 0
      },
      {
        "id": 15,
        "stockName": "Cogent",
        "price": 0
      },
      {
        "id": 16,
        "stockName": "Crexendo",
        "price": 0
      },
      {
        "id": 17,
        "stockName": "CrowdGather",
        "price": 0
      },
      {
        "id": 18,
        "stockName": "EarthLink",
        "price": 0
      },
      {
        "id": 19,
        "stockName": "Eastern",
        "price": 0
      },
      {
        "id": 20,
        "stockName": "ENDEXX",
        "price": 0
      },
      {
        "id": 21,
        "stockName": "Envestnet",
        "price": 0
      },
      {
        "id": 22,
        "stockName": "Epazz",
        "price": 0
      },
      {
        "id": 23,
        "stockName": "FlashZero",
        "price": 0
      },
      {
        "id": 24,
        "stockName": "Genesis",
        "price": 0
      },
      {
        "id": 25,
        "stockName": "InterNAP",
        "price": 0
      },
      {
        "id": 26,
        "stockName": "MeetMe",
        "price": 0
      },
      {
        "id": 27,
        "stockName": "Netease",
        "price": 0
      },
      {
        "id": 28,
        "stockName": "Qihoo",
        "price": 0
      }
    ];


  private stockSubject = new BehaviorSubject<IStocks[]>(this.stocks);

  constructor() {
    interval(10000).subscribe(() => {
      this.updateStockPrices();
    });
  }

  getStocks() {
    this.updateStockPrices()
    return this.stockSubject.asObservable();
  }

  private updateStockPrices() {
    this.stocks.forEach(stock => {
      stock.price = this.getRandomPrice();
    });
    this.stockSubject.next(this.stocks);
  }

  private getRandomPrice() {
    return Math.floor(Math.random() * 100) + 1;
  }



  private orders: Order[] = [];


  getOrders(): Order[] {
    return this.orders;
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }
}
