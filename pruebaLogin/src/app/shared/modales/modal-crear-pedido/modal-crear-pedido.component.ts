import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PedModel } from 'src/app/models/pedModel';
import { PedidosAPIService } from 'src/app/services/pedidosAPI/pedidos-api.service';

@Component({
  selector: 'app-modal-crear-pedido',
  templateUrl: './modal-crear-pedido.component.html',
  styleUrls: ['./modal-crear-pedido.component.css']
})
export class ModalCrearPedidoComponent implements OnInit {

  formulario!: FormGroup;
  estados: any[] = [];
  ped = new PedModel();

  constructor( private servicio: PedidosAPIService, 
               private fb: FormBuilder) {

this.crearFormulario();
}
  ngOnInit(): void {

    this.servicio.consultarEstados().subscribe((data)=>{
      console.log(data)     
      this.estados = data.data;
    });

  }

  crearFormulario(){
    this.formulario = this.fb.group({
      direccion: new FormControl('', [Validators.required]),
      piso: new FormControl('', Validators.required),
      puerta: new FormControl('', Validators.required),
      codigO_POSTAL: new FormControl('', Validators.required),
      nombrE_CLIENTE: new FormControl('', [Validators.required]),
      telefono: new FormControl('', Validators.required),
      montante: new FormControl('', Validators.required),
      iD_ESTADO: new FormControl(0, Validators.required),
      // iD_PEDIDO: new FormControl('', Validators.required)
    });
  }

  
  

  refresh(): void {
    window.location.reload();
  }
  
  guardar(  ) {

    //debugger;
    this.formulario.getRawValue()
    //this.formulario.reset()

      if ( this.formulario.invalid ) {
        console.log('Formulario no válido');
        return;
       }
       debugger
       console.log(this.formulario);

       console.log(this.ped);

        this.servicio.crearPedido(this.formulario.value)
        .subscribe(resp =>{
          console.log(resp);
           this.ped = resp;
        });
  }

  

}
