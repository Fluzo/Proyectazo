import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PedModel } from 'src/app/models/pedModel';
import { PedidosAPIService } from 'src/app/services/pedidosAPI/pedidos-api.service';

@Component({
  selector: 'app-modal-editar-pedido',
  templateUrl: './modal-editar-pedido.component.html',
  styleUrls: ['./modal-editar-pedido.component.css']
})
export class ModalEditarPedidoComponent implements OnInit {

  @Input() set pedido(value:PedModel){
    if(value){
      this.formulario.patchValue(value)
    }
  }

  formulario: FormGroup = new FormGroup({
    direccion: new FormControl('', [Validators.required]),
    piso: new FormControl('', Validators.required),
    puerta: new FormControl('', Validators.required),
    codigO_POSTAL: new FormControl('', Validators.required),
    nombrE_CLIENTE: new FormControl('', [Validators.required]),
    telefono: new FormControl('', Validators.required),
    montante: new FormControl('', Validators.required),
    iD_ESTADO: new FormControl(0, Validators.required),
  });
  
  estados: any[] = [];
  ped = new PedModel();
  
  private $PED_SUB: Subscription = new Subscription;
  constructor( private servicio: PedidosAPIService, 
               private fb: FormBuilder) {

    //this.crearFormulario();
   
  }

  ngOnInit(): void {
    this.$PED_SUB = this.servicio.getPed().subscribe( res=>{
      this.ped = res;
      this.crearFormulario();

    });
      this.servicio.consultarEstados().subscribe((data)=>{
      console.log(data)     
      this.estados = data.data;
    });
    
    
  }

  refresh(): void {
    window.location.reload();
  }


  crearFormulario(){
  
  this.formulario.patchValue(this.ped);

     this.formulario = this.fb.group({
      direccion: new FormControl(this.ped.direccion, [Validators.required]),
      piso: new FormControl(this.ped.piso, Validators.required),
      puerta: new FormControl(this.ped.puerta, Validators.required),
      codigO_POSTAL: new FormControl(this.ped.codigO_POSTAL, Validators.required),
      nombrE_CLIENTE: new FormControl(this.ped.nombrE_CLIENTE, [Validators.required]),
      telefono: new FormControl(this.ped.telefono, Validators.required),
      montante: new FormControl(this.ped.montante, Validators.required),
      iD_ESTADO: new FormControl(this.ped.iD_ESTADO, Validators.required),
    }); 
  }

  guardar() {
    this.formulario.getRawValue()
    console.log(this.formulario);
      if ( this.formulario.invalid ) {
        console.log('Formulario no válido');
        return;
       }
       let body: PedModel = this.formulario.value;
       body.iD_PEDIDO = this.ped.iD_PEDIDO;
       console.log(body);
       this.servicio.editarPedido(body)
        .subscribe(resp =>{
          console.log(resp);
           //this.user = resp;
           console.log(this.ped);  
        });     
  }

}
