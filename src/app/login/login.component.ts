<<<<<<< HEAD
=======
// login.component.ts - Simplified
>>>>>>> origin/main
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Staff Login</h2>
        
        <form (ngSubmit)="login()" #loginForm="ngForm">
          <div class="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              [(ngModel)]="email" 
              name="email" 
              required 
              placeholder="Enter your email"
            >
          </div>
          
          <div class="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              [(ngModel)]="password" 
              name="password" 
              required 
              placeholder="Enter your password"
            >
          </div>

          <button 
            type="submit" 
            [disabled]="!loginForm.valid || isLoading"
            class="login-btn"
          >
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>

          <div *ngIf="error" class="error-message">
            {{ error }}
          </div>
        </form>

        <div class="login-links">
          <a (click)="goToCustomerMenu()">Customer Menu</a>
        </div>
      </div>
    </div>
  `,
<<<<<<< HEAD
styles: [`
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background: #ffffff;
    font-family: Arial, sans-serif;
  }

  .login-card {
    width: 100%;
    max-width: 380px;
    padding: 32px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .login-card h2 {
    margin: 0 0 28px;
    color: #222222;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  .form-group {
    margin-bottom: 18px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333333;
    font-size: 14px;
    font-weight: 500;
  }

  .form-group input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 11px 12px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    outline: none;
    background: #ffffff;
    color: #222222;
    font-size: 14px;
  }


  .form-group input::placeholder {
    color: #9ca3af;
  }

  .login-btn {
    width: 100%;
    margin-top: 6px;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background: #ff700a;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .login-btn:hover:not(:disabled) {
    background: #000000;
  }

  .login-btn:disabled {
    background: #ff8400;
    cursor: not-allowed;
  }

  .error-message {
    margin-top: 16px;
    color: #dc2626;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
  }

  .login-links {
    margin-top: 20px;
    text-align: center;
  }

  .login-links a {
    color: #f97316;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
  }

  .login-links a:hover {
    color: #ea580c;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    .login-card {
      padding: 24px 20px;
    }
  }
`]
=======
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #ffffffff 100%);
      padding: 20px;
    }
    .login-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .form-group input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-sizing: border-box;
    }
    .login-btn {
      width: 100%;
      padding: 0.75rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
    .login-btn:disabled {
      background: #6c757d;
      cursor: not-allowed;
    }
    .error-message {
      color: #dc3545;
      margin-top: 1rem;
      text-align: center;
    }
    .login-links {
      margin-top: 1rem;
      text-align: center;
    }
    .login-links a {
      color: #007bff;
      cursor: pointer;
      text-decoration: underline;
    }
  `]
>>>>>>> origin/main
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  isLoading = false;

  constructor(
    private auth: AuthService, 
    private router: Router
  ) {}

  login(): void {
    this.isLoading = true;
    this.error = '';

    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        this.isLoading = false;
        
<<<<<<< HEAD
=======
        // Get restaurant ID from auth service (comes from backend via JWT)
>>>>>>> origin/main
        const userRestaurantId = this.auth.restaurantId;
        
        if (!userRestaurantId) {
          this.error = 'No restaurant assigned to this user.';
          return;
        }

        this.navigateToRoleDashboard(userRestaurantId);
      },
      error: (err) => {
        this.isLoading = false;
        this.error = err.error?.message || 'Login failed. Please check your credentials.';
      }
    });
  }

  private navigateToRoleDashboard(restaurantId: number): void {
    const userRole = this.auth.role ? this.auth.role.toLowerCase() : null;


    let targetRole = userRole;
<<<<<<< HEAD
  
=======
    
    // Map 'manager' to 'admin' for routing purposes
>>>>>>> origin/main
    if (userRole === 'manager') {
      targetRole = 'admin';
    }

    switch (targetRole) {
      case 'waiter':
        this.router.navigate(['/waiter', restaurantId]);
        break;
      case 'admin': 
      case 'manager':
        this.router.navigate(['/manager', restaurantId]);
        break;
      case 'kitchen':
        this.router.navigate(['/kitchen', restaurantId]);
        break;
      default:
        this.router.navigate(['/menu']);
    }
  }

  goToCustomerMenu(): void {
    this.router.navigate(['/menu']);
  }
}