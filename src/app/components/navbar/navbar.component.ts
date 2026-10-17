import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected authSrv = inject(AuthService);
  private router = inject(Router);

  currentUser = this.authSrv.currentUser;
  isAuthenticated = this.authSrv.isAuthenticated;

  logout() {
    this.authSrv.logout();
    this.router.navigate(['/login']);
  }
}
