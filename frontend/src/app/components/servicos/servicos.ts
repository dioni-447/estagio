import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  imports: [],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {
  servicos = [
  {
    titulo: 'Nota Fiscal',
    descricao: 'Emissão de notas fiscais eletrônicas.'
  },
  {
    titulo: 'Estoque',
    descricao: 'Controle completo de produtos.'
  },
  {
    titulo: 'Financeiro',
    descricao: 'Gestão de contas e pagamentos.'
  }
];
}
