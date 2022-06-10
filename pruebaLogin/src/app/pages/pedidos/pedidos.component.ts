import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PedidoAPI } from 'src/app/models/pedidoAPI';
import { PedModel } from 'src/app/models/pedModel';
import { PedidosAPIService } from 'src/app/services/pedidosAPI/pedidos-api.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: PedidoAPI[] = [];
  estados: any[] = [];

  ped = new PedModel();

  constructor( private servicio: PedidosAPIService,
               public fb: FormBuilder) { }

  ngOnInit(): void {
  this.recibirPedidos();
  }
  
  recibirPedidos(){
    this.servicio.consultarPedidos().subscribe((data)=>{
      console.log(data)     
      this.pedidos = data.data;
      });
    this.servicio.consultarEstados().subscribe((data)=>{
      console.log(data.data)     
      this.estados = data.data;
      });
  }

  getPedido(id:any){
    let pedidoEditar = this.pedidos.filter(pedido=> pedido.iD_PEDIDO === id);
    this.ped = pedidoEditar[0];
    console.log(this.ped);
    this.servicio.setPed(this.ped)
   }
}















// recibirPedidos(){

//     this.servicio.consultarPedidos().subscribe((ped:any) =>{
//       this.servicio.consultarEstados().subscribe((est:any)=>{
//         console.log(ped);
//         console.log(est);
//         for(let pedido of ped){
//           for(let estado of est){
//             if (pedido.iD_ESTADO === estado.iD_ESTADO){
//               pedido.iD_ESTADO = estado.nombre;
//             }
//           }
//         }
//       })
//       this.pedidos = ped;
//     });