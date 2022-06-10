import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subject } from 'rxjs';
import { UsuarioAPI } from 'src/app/models/usuarioApi';
import { UserModel } from 'src/app/models/userModels';

@Injectable({
  providedIn: 'root'
})
export class UsuariosAPIService {

  private urlAPI = "http://localhost:7094/api/Usuarios";

  usuarios: UsuarioAPI[] = [];


  // Esto hace como el input y el output, para enviar y recibir datos
  user: Subject <UserModel> = new Subject();

  constructor( private http: HttpClient) { }

  // El get se usa en el hijo para obtener los datos
  getUser():Observable<UserModel>{
    return this.user.asObservable();
  }
  // El set se usa en el padre para enviar los datos
  setUser(user: UserModel){
    return this.user.next(user);
  }

  // loginUsuario(data:any){
  //   return this.http.post(this.urlAPI + '/Login', data);
  // }

  consultarUsuario():Observable<any>{
    return this.http.get<any>(`${this.urlAPI}/DameUsuarios`);
  }
  consultarPerfiles():Observable<any>{
    return this.http.get<any>(`${this.urlAPI}/DamePerfiles`);
  }

  // Prueba para añadir un usuario
  anadirUsuario( user: UserModel ) {
  
      return this.http.post(`${ this.urlAPI }/AltaUsuario`, user)
      .pipe(
        map((resp: any) =>{
          user.iD_USUARIO = resp.data;
          return user;
        })
      );
    }

    crearUsuario( user: UserModel ) {
  
      return this.http.post(`${ this.urlAPI }/CrearUsuario`, user)
      .pipe(
        map((resp: any) =>{
          user.iD_USUARIO = resp.data;
          return user;
        })
      );
    }

  editarUsuario(user: UserModel ) {
    return this.http.put(`${ this.urlAPI }/EditarUsuario`, user)
  }

  desactivarUsuario(iD_USUARIO:number| string){
    return this.http.delete(`${this.urlAPI}/BorrarUsuario/${iD_USUARIO}`);
  }

  activarUsuario(iD_USUARIO:number| string){
    return this.http.delete(`${this.urlAPI}/ActivarUsuario/${iD_USUARIO}`);
  }
}
