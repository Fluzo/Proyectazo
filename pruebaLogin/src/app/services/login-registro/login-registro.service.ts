import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { map, Observable, Subject } from 'rxjs';
import { UserModel } from 'src/app/models/userModels';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistroService {

  private urlAPI = "http://localhost:7094/api/Usuarios";

  

  @Input() usuario!:UsuarioModel[];
  user: Subject <UserModel> = new Subject();

  constructor(private http: HttpClient,
              private router: Router) { 
              }


    getUser():Observable<UserModel>{
      return this.user.asObservable();
    }
    // El set se usa en el padre para enviar los datos
    setUser(user: UserModel){
      return this.user.next(user);
    }


  

  ingresar(user:UsuarioModel){
    return this.http.post(`${ this.urlAPI }/Login`,user)
    .pipe(
      map((resp: any) =>{
        console.log("Entrando en el map");
        // this.servicio.guardarToken(resp['token']);
        localStorage.setItem('token', resp['token']);
        localStorage.setItem('iD_PERFIL', resp['iD_PERFIL'] )
        //localStorage.setItem('iD_USUARIO', resp[iD_USUARIO])
        console.log(resp);
        return this.router.navigateByUrl('/home');
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
}
