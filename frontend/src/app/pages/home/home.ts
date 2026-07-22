import { Component } from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {Servicos} from '../../components/servicos/servicos';
import {Contato} from '../../components/contato/contato';


@Component({
  selector: 'app-home',
  imports: [Hero, Servicos, Contato],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
