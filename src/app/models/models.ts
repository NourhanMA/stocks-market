export interface UserData {
  name: string;
  quantity: number
}

export interface IStocks {
  id:number
  stockName: string;
  price: number
}


export interface Order extends IStocks{
  userName: string
  quantity: number
}
