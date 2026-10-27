<<<<<<< HEAD

=======
// app.routes.ts - UPDATED VERSION
>>>>>>> origin/main
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
<<<<<<< HEAD
=======
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { RestaurantLoginComponent } from './restaurant-login/restaurant-login.component';
import { RestaurantSelectionComponent } from './restaurant-selection/restaurant-selection.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
>>>>>>> origin/main
import { ManagerReportsComponent } from './manager-reports/manager-reports.component';


export const routes: Routes = [
<<<<<<< HEAD

  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
=======
  // Public routes
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  
  // Authentication routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'restaurant-login', component: RestaurantLoginComponent },
  { path: 'restaurant-selection', component: RestaurantSelectionComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  
  // Restaurant-specific protected routes
>>>>>>> origin/main
  {
    path: 'waiter/:restaurantId',
    component: WaiterComponent,
    canActivate: [AuthGuard],
    data: { 
<<<<<<< HEAD
      roles: ['waiter', 'manager', 'admin'], 
=======
      roles: ['waiter', 'manager', 'admin'], // ✅ ADDED manager and admin
>>>>>>> origin/main
      requiresRestaurantContext: true
    }
  },
  {
    path: 'waiter',
    redirectTo: '/login', 
    pathMatch: 'full'
  },
<<<<<<< HEAD

=======
  
  // Kitchen routes
>>>>>>> origin/main
  {
    path: 'kitchen/:restaurantId',
    component: KitchenComponent,
    canActivate: [AuthGuard],
    data: { 
<<<<<<< HEAD
      roles: ['kitchen', 'manager', 'admin'], 
=======
      roles: ['kitchen', 'manager', 'admin'], // ✅ FIX: Changed to lowercase
>>>>>>> origin/main
      requiresRestaurantContext: true
    }
  },
  {
    path: 'kitchen',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
<<<<<<< HEAD

=======
  // Manager routes
>>>>>>> origin/main
  {
    path: 'manager/:restaurantId',
    component: ManagerComponent,
    canActivate: [AuthGuard],
    data: { 
<<<<<<< HEAD
      roles: ['manager', 'admin'], 
=======
      roles: ['manager', 'admin'], // ✅ FIX: Changed to lowercase
>>>>>>> origin/main
      requiresRestaurantContext: true
    }
  },
  {
    path: 'manager',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
<<<<<<< HEAD
  { path: 'payment', component: PaymentComponent },
  { path: 'pending-payments', component: PendingPaymentsComponent },
  { path: 'new-order', component: NewOrderComponent },
    { path: 'manager-reports', component: ManagerReportsComponent },

  
=======
  // Other routes
  { path: 'payment', component: PaymentComponent },
  { path: 'pending-payments', component: PendingPaymentsComponent },
  { path: 'new-order', component: NewOrderComponent },
  { path: 'inventory', component: InventoryManagementComponent },
    { path: 'manager-reports', component: ManagerReportsComponent },

  
  // Fallback route
>>>>>>> origin/main
  { path: '**', redirectTo: '/menu' }
]; 