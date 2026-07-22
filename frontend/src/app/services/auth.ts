import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getNome(): string | null {
    return localStorage.getItem('nomeUsuario');
  }

  isLogado(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nomeUsuario');
  }
}