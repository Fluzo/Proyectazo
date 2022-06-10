import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/userModels';
import { UsuariosAPIService } from 'src/app/services/usuariosAPI/usuarios-api.service';
import { UsuarioAPI } from '../../models/usuarioApi';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioAPI[] = [];
  perfiles: any[] = [];
  activar : boolean = true;
  
  user = new UserModel();

  constructor( private servicio: UsuariosAPIService, 
               public fb: FormBuilder) {

  }

  ngOnInit(): void {
    
  this.recibirUsuarios();  
    // this.servicio.editarUsuario(this.user.iD_USUARIO, this.user);
  }

  recibirUsuarios(){
    this.servicio.consultarUsuario().subscribe((data)=>{
      console.log(data)     
      this.usuarios = data.data;
    });
    this.servicio.consultarPerfiles().subscribe((data)=>{
      console.log(data)     
      this.perfiles = data.data;
    });
  }

  
  getUsuario(id:any){
    let usuarioEditar = this.usuarios.filter(usuario=> usuario.iD_USUARIO === id);
    this.user = usuarioEditar[0];
    console.log(this.user);
    this.servicio.setUser(this.user)
  }
  
  desactivarUser(id:any){
   this.servicio.desactivarUsuario(id)
   .subscribe(res => this.recibirUsuarios())
  }

  activarUser(id:any){
    this.servicio.activarUsuario(id)
    .subscribe(res => this.recibirUsuarios());
    console.log(this.usuarios);
  }

  actualizarDatos($event : any)
  {
    if($event == true)
    {
      this.recibirUsuarios();
    }
  }
}


