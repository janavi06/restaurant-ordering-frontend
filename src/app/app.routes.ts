
import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { WaiterComponent } from './waiter/waiter.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ManagerComponent } from './manager/manager.component';
import { PaymentComponent } from './payment/payment.component';
import { PendingPaymentsComponent } from './pending-payments/pending-payments.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { NewOrderComponent } from './new-order/new-order.component';
import { LoginComponent } from './login/login.component';
import { ManagerReportsComponent } from './manager-reports/manager-reports.component';


export const routes: Routes = [

  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  {
    path: 'waiter/:restaurantId',
    component: WaiterComponent,
    canActivate: [AuthGuard],
    data: { 
      roles: ['waiter', 'manager', 'admin'], 
      requiresRestaurantContext: true
    }
  },
  {
    path: 'waiter',
    redirectTo: '/login', 
    pathMatch: 'full'
  },

  {
    path: 'kitchen/:restaurantId',
    component: KitchenComponent,
    canActivate: [AuthGuard],
    data: { 
      roles: ['kitchen', 'manager', 'admin'], 
      requiresRestaurantContext: true
    }
  },
  {
    path: 'kitchen',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  

  {
    path: 'manager/:restaurantId',
    component: ManagerComponent,
    canActivate: [AuthGuard],
    data: { 
      roles: ['manager', 'admin'], 
      requiresRestaurantContext: true
    }
  },
  {
    path: 'manager',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  { path: 'payment', component: PaymentComponent },
  { path: 'pending-payments', component: PendingPaymentsComponent },
  { path: 'new-order', component: NewOrderComponent },
    { path: 'manager-reports', component: ManagerReportsComponent },

  
  { path: '**', redirectTo: '/menu' }
]; 