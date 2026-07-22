import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {Hero} from '../../components/hero/hero';
import {Servicos} from '../../components/servicos/servicos';
import {Contato} from '../../components/contato/contato';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Servicos, Contato, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
