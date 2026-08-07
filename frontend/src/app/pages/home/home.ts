import { Component } from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {Servicos} from '../../components/servicos/servicos';
import {Contato} from '../../components/contato/contato';
import { Sobre } from '../../components/sobre/sobre';


@Component({
  selector: 'app-home',
  imports: [Hero, Servicos, Contato,Sobre],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
