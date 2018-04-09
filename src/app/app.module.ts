import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { UsuariosService } from './services/usuarios.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InscripcionesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
