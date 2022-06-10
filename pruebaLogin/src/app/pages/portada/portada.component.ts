import { Component, OnInit } from '@angular/core';
import { BonsaisService } from 'src/app/services/bonsais-service/bonsais.service';
import { Bonsai } from 'src/app/services/bonsais-service/bonsais.service'; 
import { MacetasService } from 'src/app/services/macetas-service/macetas.service';
import { Maceta } from 'src/app/services/macetas-service/macetas.service';
import { Sustrato, SustratosService } from 'src/app/services/sustratos-service/sustratos.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  bonsais  : Bonsai  [] = [];
  macetas  : Maceta  [] = [];
  sustratos: Sustrato[] = [];
  

  constructor( private _sustratos: SustratosService,
               private _bonsais: BonsaisService,
               private _macetas: MacetasService) { }

  ngOnInit(): void {

    this.bonsais = this._bonsais.getBonsais();
    //console.log(this.bonsais);
    
    this.macetas = this._macetas.getMacetas();
    //console.log(this.macetas);

    this.sustratos = this._sustratos.getSustratos();
    //console.log(this.sustratos);
  }


}
