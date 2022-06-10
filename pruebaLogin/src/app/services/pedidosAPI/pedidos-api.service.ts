import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { PedidoAPI } from 'src/app/models/pedidoAPI';
import { PedModel } from 'src/app/models/pedModel';

@Injectable({
  providedIn: 'root'
})
export class PedidosAPIService {

  private urlAPI = "http://localhost:7094/api/Pedido";

  pedidos : PedidoAPI[] = [];

  ped: Subject <PedModel> = new Subject();

  constructor( private http: HttpClient) { }

  getPed():Observable<PedModel>{
    return this.ped.asObservable();
  }

  setPed(ped: PedModel){
    return this.ped.next(ped);
  }

  consultarPedidos():Observable<any>{
    return this.http.get<any>(`${this.urlAPI}/DamePedidos`);
  }

  consultarEstados():Observable<any>{
    return this.http.get<any>(`${this.urlAPI}/DameEstados`);
  }

  crearPedido(ped : PedModel){
    return this.http.post(`${ this.urlAPI }/CrearPedido`, ped)
    .pipe(
      map((resp: any) =>{
        ped.iD_PEDIDO = resp.data;
        return ped;
      })
    );
  }

  editarPedido(ped : PedModel ) {
    //debugger
      return this.http.put(`${ this.urlAPI }/EditarPedido`, ped)
    }
  
}

