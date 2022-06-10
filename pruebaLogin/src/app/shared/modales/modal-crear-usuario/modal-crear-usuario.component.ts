import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/userModels';
import { UsuariosAPIService } from 'src/app/services/usuariosAPI/usuarios-api.service';

@Component({
  selector: 'app-modal-crear-usuario',
  templateUrl: './modal-crear-usuario.component.html',
  styleUrls: ['./modal-crear-usuario.component.css']
})
export class ModalCrearUsuarioComponent implements OnInit {

  formulario!: FormGroup;
  perfiles: any[] = [];
  user = new UserModel();

  constructor( private servicio: UsuariosAPIService, 
               private fb: FormBuilder) {

    this.crearFormulario();
  }

  ngOnInit(): void {

    this.servicio.consultarPerfiles().subscribe((data)=>{
      console.log(data)     
      this.perfiles = data.data;
    });

  }

  crearFormulario(){
    this.formulario = this.fb.group({
      usuario: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      iD_PERFIL: new FormControl('', Validators.required),
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
       
       console.log(this.user);

        this.servicio.anadirUsuario(this.formulario.value)
        .subscribe(resp =>{
          console.log(resp);
           this.user = resp;
        });
  }
  
}
