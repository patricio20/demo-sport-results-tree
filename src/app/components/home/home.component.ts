import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../../services/torneo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  torneo:any[] = [];

  constructor( private _torneoService:TorneoService ) {
      console.log("Constructor torneo");
  }


  ngOnInit() {
    console.log("ngOnInit torneo");
    this.torneo = this._torneoService.getTorneo();
    console.log(this.torneo);
  }

}
