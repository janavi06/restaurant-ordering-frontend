 Restaurant Ordering Frontend

Angular frontend for a QR-based restaurant ordering and POS platform. Customers scan a table QR code, browse the menu, and order from their phone. Kitchen, waiters, and managers each get their own live dashboard.

How it works

1. Customer scans the QR code at the table → menu opens in the browser (no app install)
2. Order is placed → appears instantly on the kitchen dashboard
3. Kitchen updates status → waiter and customer see it
4. Payment is recorded → manager reports and inventory update

Features

Customer
- QR-based digital menu, cart, and order placement
- Registration, login, and order history

Restaurant staff
- Kitchen dashboard: incoming orders and status updates
- Waiter dashboard: table orders and service flow

Management
- Manager dashboard with sales reports
- Inventory and payment interfaces

Platform
- Installable PWA with [offline menu caching / add-to-home-screen]
- Role-based routing and guards for customer, kitchen, waiter, and manager

Tech stack

Angular
TypeScript
HTML and CSS
Progressive Web App (PWA)

 Getting started
 
Prerequisites: Node.js 18+, npm, Angular CLI, and the [backend API](backend-repo-link) running locally

git clone https://github.com/janavi06/restaurant-ordering-frontend.git
cd restaurant-ordering-frontend
npm install

Set the API URL in src/environments/environment.ts:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:[port]/api'
};

npx ng serve

Open `http://localhost:4200`.

 Project structure
 
src/app/
  customer/      # menu, cart, orders
  kitchen/       # kitchen dashboard
  waiter/        # waiter dashboard
  manager/       # reports, inventory, payments
  core/          # auth, guards, interceptors, services
  shared/        # reusable components



 Author

Janavi Korgaonkar
