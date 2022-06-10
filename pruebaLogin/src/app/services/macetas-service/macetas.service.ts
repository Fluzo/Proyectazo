import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MacetasService {

  private macetas: Maceta[] = [
    {
      nombre: "Terracota",
      imagen: "./assets/img/macetas/terracota.jpg"
    },
    {
      nombre: "Gres",
      imagen: "./assets/img/macetas/gres.jpg"
    },
    {
      nombre: "Porcelana",
      imagen: "./assets/img/macetas/porcelana.jpg"
    },
    {
      nombre: "Raku",
      imagen: "./assets/img/macetas/raku.jpg"
    }

  ];

  constructor() { }

  getMacetas(){
    return this.macetas
  }

}
  export interface Maceta{
    nombre: string;
    imagen: string;
  };


