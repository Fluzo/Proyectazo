import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/userModels';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { ValidadorContrasenaService } from 'src/app/services/validador-contrasena/validador-contrasena.service';
import { LoginRegistroService } from '../../services/login-registro/login-registro.service';
import { UsuariosAPIService } from '../../services/usuariosAPI/usuarios-api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formulario!: FormGroup;
  perfiles: any[] = [];
  user = new UserModel();

  constructor( private fb: FormBuilder,
               private validador: ValidadorContrasenaService,
               private servicioLogin: LoginRegistroService,
               private servicio :UsuariosAPIService) { 
                 
    this.registrar();
  }

  ngOnInit(): void {

    this.servicio.consultarPerfiles().subscribe((data)=>{
      console.log(data)     
      this.perfiles = data.data;
    });

    //  this.usuario = new UsuarioModel();
  }

  get nombreNoValido() {
    return this.formulario.get('usuario')?.invalid && this.formulario.get('usuario')?.touched
  }

  get correoNoValido() {
    return this.formulario.get('email')?.invalid && this.formulario.get('email')?.touched
  }

  get contrasenaNoValido() {
    return this.formulario.get('password')?.invalid && this.formulario.get('password')?.touched
  }

  get contrasena2NoValido() {
    
    const contrasena = this.formulario.get("password")?.value;
    const contrasena2 = this.formulario.get("password2")?.value;

    return ( contrasena == contrasena2 ) ? false : true;

    // return this.formRegistro.get('contrasena2')?.invalid && this.formRegistro.get('contrasena2')?.touched
  }


  registrar(){
    this.formulario = this.fb.group({
      usuario: new FormControl('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password2: new FormControl('', [Validators.required, Validators.minLength(1)]),
      //iD_USUARIO: new FormControl(50)

    },{
      validators: this.validador.contrasenasIguales('password', 'password2')
    });

  }

  guardar(){
    console.log("Formulario enviado");
    console.log(this.formulario);

    if ( this.formulario.invalid){
      return Object.values( this.formulario.controls).forEach ( control => {
        control.markAsTouched();
        console.log('Formulario no válido');
      });
      
    }

    this.servicioLogin.crearUsuario(this.formulario.value)
        .subscribe(resp =>{
          this.user.perfil = "USUARIO";
          this.user = resp;
          console.log(resp);
        });
  }

}
