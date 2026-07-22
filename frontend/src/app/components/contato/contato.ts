import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  nome = '';
  email = '';
  mensagem = '';
  enviado = false;
  erro = false;

  private apiUrl = 'http://localhost:3333/api/v1';

  constructor(private http: HttpClient) {}

  enviar() {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Faça login para enviar a mensagem.');
      return;
    }

    const body = { nome: this.nome, email: this.email, mensagem: this.mensagem };

    this.http.post(`${this.apiUrl}/mensagens`, body, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: () => {
        this.enviado = true;
        this.erro = false;
        this.nome = '';
        this.email = '';
        this.mensagem = '';
        alert('Mensagem enviada com sucesso!');
      },
      error: (err) => {
        console.error(err);
        this.erro = true;
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    });
  }
}