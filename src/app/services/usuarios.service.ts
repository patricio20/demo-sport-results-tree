
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  private lstUsuaios:any = [

    {
      "_id" : "1",
      "mail" : "niki@admin", "nombres" : "Niki",
      "apellidos" : "Patricio Medina",
      "edad" : 34.0,
      "peso" : 65.0,
      "talla" : 163.0,
      "caracteristicas" : { "academia" : "A1", "especialidad" : "lucha libre", "cinturon" : "NEGRO" } },
    {
      "_id" : "2",
      "mail" : "francis@admin",
      "nombres" : "Francisco",
      "apellidos" : "Retamoso",
      "edad" : 40.0,
      "peso" : 80.0,
      "talla" : 180.0,
      "caracteristicas" : { "academia" : "A2", "especialidad" : "uñas", "cinturon" : "NEGRO" } },
      {
        "_id" : "3",
        "mail" : "julio@admin", "nombres" : "Julio",
        "apellidos" : "Quispe huertas",
        "edad" : 37.0,
        "peso" : 75.0,
        "talla" : 175.0,
        "caracteristicas" : { "academia" : "A1", "especialidad" : "lucha libre", "cinturon" : "NEGRO" } },
        {
          "_id" : "4",
          "mail" : "pablo@admin", "nombres" : "Pablo",
          "apellidos" : "Retamoso",
          "edad" : 33.0,
          "peso" : 70.0,
          "talla" : 170.0,
          "caracteristicas" : { "academia" : "A1", "especialidad" : "lucha libre", "cinturon" : "NEGRO" } }
  ];

  constructor() {
      console.log("Servicio usuario listo!!!");
   }

  getUsuarios(){
    return this.lstUsuaios;
  }

}
