import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticuloModel } from 'src/app/models/articuloModel';
import { AerticulosAPIService } from 'src/app/services/articulosAPI/aerticulos-api.service';

@Component({
  selector: 'app-modal-crear-articulo',
  templateUrl: './modal-crear-articulo.component.html',
  styleUrls: ['./modal-crear-articulo.component.css']
})
export class ModalCrearArticuloComponent implements OnInit {

  formulario!: FormGroup;
  perfiles: any[] = [];
  art = new ArticuloModel();

  constructor( private servicio: AerticulosAPIService, 
               private fb: FormBuilder) {

    this.crearFormulario();
  }

  ngOnInit(): void {

  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      alto: new FormControl('', Validators.required),
      ancho: new FormControl('', Validators.required),
      largo: new FormControl('', Validators.required),     
      peso: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      fabricante: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required)
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

       console.log(this.art);

        this.servicio.anadirArticulo(this.formulario.value)
        .subscribe(resp =>{
          console.log(resp);
           this.art = resp;
        });
  }
  
}
