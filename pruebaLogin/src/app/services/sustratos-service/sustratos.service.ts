import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SustratosService {

  private sustratos: Sustrato[] = [
    {
      nombre: "Akadama",
      imagen: "./assets/img/sustratos/akadama.jpg"
    },
    {
      nombre: "Grava",
      imagen: "./assets/img/sustratos/grava.jpg"
    },
    {
      nombre: "Kanuma",
      imagen: "./assets/img/sustratos/kanuma.jpg"
    },
    {
      nombre: "Kiryuzuna",
      imagen: "./assets/img/sustratos/kiryu.jpg"
    },
    {
      nombre: "Pómice",
      imagen: "./assets/img/sustratos/pomice.jpg"
    },
    {
      nombre: "Turba",
      imagen: "./assets/img/sustratos/turba.jpg"
    }

  ];

  constructor() { }

  getSustratos(){
    return this.sustratos
  }

}
  export interface Sustrato{
    nombre: string;
    imagen: string;
  };
