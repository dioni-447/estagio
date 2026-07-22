import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from "../../services/auth";
import { inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuAberto = false;
  auth = inject(AuthService);

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }
}
