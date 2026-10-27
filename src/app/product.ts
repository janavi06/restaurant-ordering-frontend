import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Product {
    id : number;
    name: string;
    price: number;
}

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>Menu</h2>

      <div *ngFor="let product of products">
      <span>{{ product.name }}</span>
      <span>₹{{ product.price }}</span>
      <button (click)="addToCart(product)">
        Add
      </button>
    </div>

    <p>Items added: {{ cartCount }}</p>

    `
})

export class ProductComponent {
    products : Product[] = [
        {id: 1, name: 'Pizza', price: 200},
        {id: 2, name: 'Burger', price: 150},
        {id: 3, name: 'Dose', price: 300}
    ];

    cartCount = 0;

    addToCart(product: Product): void {
        this.cartCount++;
        console.log('Added:',product.name);
    }
}