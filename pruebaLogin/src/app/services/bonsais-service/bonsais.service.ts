import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonsaisService {

  private bonsais: Bonsai[] = [
    {
      nombre: "Shito",
      imagen: "./assets/img/bonsais/shito.jpg"
      
    },
    {
      nombre: "Mame",
      imagen: "./assets/img/bonsais/mame.jpg"
    },
    {
      nombre: "Shohin",
      imagen: "./assets/img/bonsais/shohin.jpg"
    },
    {
      nombre: "Komono",
      imagen: "./assets/img/bonsais/komono.jpg"
    },
    {
      nombre: "Chumono",
      imagen: "./assets/img/bonsais/chumono.jpg"
    },
    {
      nombre: "Omono",
      imagen: "./assets/img/bonsais/omono.jpg"
    }

  ];

  constructor() { }


  getBonsais(){
    return this.bonsais;
  }
}

export interface Bonsai{
  nombre: string;
  imagen: string;
};
