import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { ArticuloAPI } from 'src/app/models/articuloAPI';
import { ArticuloModel } from '../../models/articuloModel';

@Injectable({
  providedIn: 'root'
})
export class AerticulosAPIService {

  private urlAPI = "http://localhost:7094/api/Articulos";

  articulos: ArticuloAPI[] = [];
  
  art: Subject <ArticuloModel> = new Subject();

  constructor( private http: HttpClient) { }

  getArt():Observable<ArticuloModel>{
    return this.art.asObservable();
  }

  setArt(art: ArticuloModel){
    return this.art.next(art);
  }

  consultarArticulos():Observable<any>{
    return this.http.get<any>(`${this.urlAPI}/DameArticulos`);
  }

  // crearArticulo(data:any){
  //   return this.http.post(this.urlAPI + '/CrearArticulo', data);
  // }
  anadirArticulo( art: ArticuloAPI ) {
  
      return this.http.post(`${ this.urlAPI }/CrearArticulo`, art)
      .pipe(
        map((resp: any) =>{
          art.iD_ARTICULO = resp.data;
          return art;
        })
      );
    }

  editarArticulo(art: ArticuloAPI){
    return this.http.put(`${this.urlAPI}/EditarArticulo`, art);
  }

  desactivarArticulo(iD_ARTICULO:number| string){
    return this.http.delete(`${this.urlAPI}/BorrarArticulo/${iD_ARTICULO}`);
  }

  activarArticulo(iD_ARTICULO:number| string){
    return this.http.delete(`${this.urlAPI}/ActivarArticulo/${iD_ARTICULO}`);
  }
}
