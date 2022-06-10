import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ArticuloModel } from 'src/app/models/articuloModel';
import { AerticulosAPIService } from 'src/app/services/articulosAPI/aerticulos-api.service';

@Component({
  selector: 'app-modal-editar-articulo',
  templateUrl: './modal-editar-articulo.component.html',
  styleUrls: ['./modal-editar-articulo.component.css']
})
export class ModalEditarArticuloComponent implements OnInit {

  @Input() set articulo(value:ArticuloModel){
    if(value){
      this.formulario.patchValue(value)
    }
  }

  formulario: FormGroup = new FormGroup({
      nombre: new FormControl('', Validators.required),
      alto: new FormControl('', Validators.required),
      ancho: new FormControl('', Validators.required),
      largo: new FormControl('', Validators.required),     
      peso: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      fabricante: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required)
  });
  
  art = new ArticuloModel();
  
  private $ART_SUB: Subscription = new Subscription;
  constructor( private servicio: AerticulosAPIService, 
               private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.$ART_SUB = this.servicio.getArt().subscribe( res=>{
      this.art = res;
      this.crearFormulario();
    });
  }

  refresh(): void {
    window.location.reload();
  }


  crearFormulario(){
  
  this.formulario.patchValue(this.art);
console.log(this.art);
     this.formulario = this.fb.group({
      nombre: new FormControl(this.art.nombre, [Validators.required]),
      alto: new FormControl(this.art.alto, Validators.required),
      ancho: new FormControl(this.art.ancho, Validators.required),
      largo: new FormControl(this.art.largo, Validators.required),     
      peso: new FormControl(this.art.peso, Validators.required),
      descripcion: new FormControl(this.art.descripcion, Validators.required),
      fabricante: new FormControl(this.art.fabricante, Validators.required),
      precio: new FormControl(this.art.precio, Validators.required)
    }); 
    console.log(this.formulario.value);
  }

  guardar() {
    this.formulario.getRawValue()
    console.log(this.formulario);
      if ( this.formulario.invalid ) {
        console.log('Formulario no válido');
        return;
       }
       let body: ArticuloModel = this.formulario.value;
       body.iD_ARTICULO = this.art.iD_ARTICULO;
       console.log(body);
       this.servicio.editarArticulo(body)
        .subscribe(resp =>{
          console.log(resp);
           //this.art = resp;
           console.log(this.art);  
        });     
  }

}
