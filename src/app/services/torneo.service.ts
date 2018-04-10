
import { Injectable } from '@angular/core';

@Injectable()
export class TorneoService {

  private torneo:any = [
    {
      "_idl" : "1_line",
      "_idd" : "1_lined",
      "_idt" : "1_key",
      "_dl"  : "m64.02642,243.90154l165,0",
      "_dd"  : "m281.48148,295.78562l0,0l-52.14289,-52.60551",
      "_sw" : "2",
      "_xt"  : "55",
      "_yt"  : "235.770165",
      "_name" : "Niki Patricio Medina"
    },
    {
      "_idl" : "2_line",
      "_idd" : "2_lined",
      "_idt" : "2_key",
      "_dl"  : "m281.62059,296.3742l0,0l-54.21522,53.32424",
      "_dd"  : "m62.71063,349.16469l165,0",
      "_sw" : "2",
      "_xt"  : "55",
      "_yt"  : "341.079719",
      "_name" : "Niki Patricio Medina"
    },
    {
      "_idl" : "3_line",
      "_idd" : "3_lined",
      "_idt" : "3_key",
      "_dl"  : "m281.48148,468.65384l0,0l-52.14289,-52.60551",
      "_dd"  : "m64.02642,416.76976l165,0",
      "_sw" : "2",
      "_xt"  : "55",
      "_yt"  : "410.10615",
      "_name" : "Niki Patricio Medina"
    },
    {
      "_idl" : "4_line",
      "_idd" : "4_lined",
      "_idt" : "4_key",
      "_dl"  : "m281.62059,469.24242l0,0l-54.21522,53.32424",
      "_dd"  : "m62.71063,522.03291l165,0",
      "_sw" : "2",
      "_xt"  : "55",
      "_yt"  : "514.53075",
      "_name" : "Niki Patricio Medina"
    },
    {
      "_idl" : "5_line",
      "_idd" : "5_lined",
      "_idt" : "5_key",
      "_dl"  : "m1278.41976,243.00983l0,0l-54.74433,53.32424",
      "_dd"  : "m1278.56597,243.96975l165,0",
      "_sw" : "2",
      "_xt"  : "1250",
      "_yt"  : "235.770165",
      "_name" : "Niki Patricio Medina"
    },
    {
      "_idl" : "6_line",
      "_idd" : "6_lined",
      "_idt" : "6_key",
      "_dl"  : "m1276.15619,350.30057l0,0l-52.14288,-52.60551",
      "_dd"  : "m1275.70883,350.39817l165,0",
      "_sw" : "2",
      "_xt"  : "1250",
      "_yt"  : "342.849628",
      "_name" : "Niki Patricio Medina"
    },
    {
      "_idl" : "7_line",
      "_idd" : "7_lined",
      "_idt" : "7_key",
      "_dl"  : "m1277.60675,413.08993l0,0l-54.74433,53.32423",
      "_dd"  : "m1277.75296,414.04985l165,0",
      "_sw" : "2",
      "_xt"  : "1250",
      "_yt"  : "406.566333",
      "_name" : "Niki Patricio Medina"
    },
    {
      "_idl" : "8_line",
      "_idd" : "8_lined",
      "_idt" : "8_key",
      "_dl"  : "m1275.34318,520.38067l0,0l-52.14288,-52.60551",
      "_dd"  : "m1274.89582,520.47827l165,0",
      "_sw" : "2",
      "_xt"  : "1250",
      "_yt"  : "513.645796",
      "_name" : "Niki Patricio Medina"
    },

  ];

  constructor() {
      console.log("Servicio torneo listo!!!");
   }

  getTorneo(){
    return this.torneo;
  }

}
