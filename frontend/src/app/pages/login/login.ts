import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";


@Component({
  selector: 'app-login',
  imports: [FormsModule, Footer, Header],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(private http: HttpClient, private router: Router) {}

  entrar() {
    this.http.post<any>('http://localhost:3333/api/v1/auth/login', {
      email: this.email,
      password: this.senha
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('nomeUsuario', res.data.user.fullName);
        this.router.navigate(['/']);
      },
      error: () => {
        this.erro = 'Email ou senha inválidos.';
      }
    });
  }
}
