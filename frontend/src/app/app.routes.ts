import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import { Login } from './pages/login/login';
import { Administracao } from './pages/administracao/administracao';

export const routes: Routes = [
  { path: '', component: Home },
  {path: 'login', component: Login},
  {path: 'admin', component: Administracao}
];
