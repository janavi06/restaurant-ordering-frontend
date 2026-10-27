<<<<<<< HEAD
# DigitalMenu

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
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
>>>>>>> origin/main
