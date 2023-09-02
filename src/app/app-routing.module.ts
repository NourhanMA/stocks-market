import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './components/stocks/stocks.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path: 'stocks', component: StocksComponent},
  { path: '', redirectTo: 'stocks', pathMatch: 'full' },
  {path: 'orders', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
