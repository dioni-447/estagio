import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, HttpClient],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {

  name = '';
  email = '';
  password = '';
  passwordConfirmation = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register() {

    this.http.post(
      `${environment.apiUrl}/users`,
      {
        name: this.name,
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation
      }
    ).subscribe({

      next: () => {

        alert("Conta criada!");

        this.router.navigate(['/login']);

      },

      error: err => {

        alert(err.error.message);

      }

    });

  }

}