import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface Mensagem {
  id: number;
  nome: string;
  email: string;
  mensagem: string;
  createdAt: string;
  updatedAt: string;
}

interface MensagensResponse {
  mensagens: Mensagem[];
}

@Component({
  selector: 'app-administracao',
  imports: [CommonModule],
  templateUrl: './administracao.html',
  styleUrl: './administracao.css',
})
export class Administracao implements OnInit {
  
  mensagens: Mensagem[] = [];

  carregando = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarMensagens();
  }

  carregarMensagens(): void {
    const token = localStorage.getItem('token');

    if (!token) {
    alert('Faça login para acessar a administração.');
    window.location.href = '/login';
    return;
}
    this.http.get(
  `${environment.apiUrl}/mensagens`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
)
      .subscribe({
        next: (response: any) => {
          this.mensagens = response.mensagens;
          this.carregando = false;

          console.log('Mensagens carregadas:', this.mensagens);
        },

        error: (erro) => {
          console.error(
            'Erro ao carregar mensagens:',
            erro
          );

          this.carregando = false;
        }
      });
    }
}
