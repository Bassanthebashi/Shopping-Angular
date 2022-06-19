import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginRegGuardService } from './guard/login-reg-guard.service';
import { PagesGuardService } from './guard/pages-guard.service';

const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate:[LoginRegGuardService]},
  {path:"register",component:RegisterComponent,canActivate:[LoginRegGuardService]},
  {path:"orders",component:OrdersComponent,canActivate:[PagesGuardService]},
  {path:"",component:ProductsComponent,canActivate:[PagesGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
