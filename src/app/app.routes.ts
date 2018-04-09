
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
