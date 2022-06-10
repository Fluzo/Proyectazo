import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/userModels';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioAPI } from 'src/app/models/usuarioApi';
import { UsuariosAPIService } from 'src/app/services/usuariosAPI/usuarios-api.service';
import { LoginRegistroService } from '../../services/login-registro/login-registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@Input() usuario!:UsuarioModel[];
  //user: Subject <UserModel> = new Subject();
  formLogin! : FormGroup;
  user = new UsuarioModel;
  recordarme = true;
  usuario = new UserModel;
  perfiles: any[] = [];

  constructor( private fb: FormBuilder,
               private loginRegistroService: LoginRegistroService,
               private servicio : UsuariosAPIService) { 


              //this.recordarme = false;
              this.formularioLogin();
  }

  ngOnInit(): void {
    // this.recibirPerfiles();
  }

  get correoNoValido() {
    return this.formLogin.get('correo')?.invalid && this.formLogin.get('correo')?.touched
  }

  get contrasenaNoValido() {
    return this.formLogin.get('contrasena')?.invalid && this.formLogin.get('contrasena')?.touched
  }

  formularioLogin() {

    this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });

  }

  // recibirPerfiles(){
  //   this.servicio.consultarPerfiles().subscribe((data)=>{
  //     console.log(data)     
  //     this.perfiles = data.data;
  //   });

  //   this.servicio.consultarUsuario().subscribe((data)=>{
  //     console.log(data)     
  //     this.usuario = data.data;
  //   });
  // }

  // getPerfil(perfil:any){
  //   let perfilUser = this.perfiles.filter(perfilUsuario=> perfilUsuario.perfil === perfil);
  //   this.user = perfilUser[0];
  //   console.log(this.user);
  //   this.loginRegistroService.setUser(this.usuario);
  // }


  guardar(  ) {

    //console.log(this.user);

    //debugger;
    this.formLogin.getRawValue()
    //this.formulario.reset()

      if ( this.formLogin.invalid ) {
        console.log('Formulario no válido');
        return;
       }
       
       this.loginRegistroService.ingresar(this.formLogin.value)
       .subscribe(resp =>{
        //  if(this.recordarme){
        //    localStorage.setItem('id', this.user.email);
        //  }
         console.log(resp);
         //this.user = resp;
         console.log(this.user);
         this.loginRegistroService.setUser(this.usuario);
         this.usuario.logged = true;
         this.usuario.perfil = this.usuario.perfil;
         console.log(this.usuario);
        });
  }

}
