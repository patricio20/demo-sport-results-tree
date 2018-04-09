import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  usuarios:any[] = [];

  constructor( private _usuariosService:UsuariosService ) {
      console.log("Constructor usuarios");
  }

  ngOnInit() {
    console.log("ngOnInit usuarios");

    this.usuarios = this._usuariosService.getUsuarios();

    console.log(this.usuarios);

  }

}
