// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AutenticacionService {

//   perfil!: number ;

//   constructor() { }

//   public guardarToken( idToken: string ){

//     this.userToken = idToken;
//     localStorage.setItem('token', idToken);
//   }

//   public obtenerToken(): string| null{
//     return localStorage.getItem('token');
//   }

//   leerToken(){
//     if( localStorage.getItem('tokenUsuario') ) {
//       this.userToken = localStorage.getItem('tokenUsuario')
//     }else{
//       this.userToken = '';
//     }

//     return this.userToken;
//   }


//   refresh(){

      
//   }


//   logout(){
//     localStorage.removeItem('token');
//   }


//   esAdmin():boolean{
//     console.log("auth", this.userToken);
//     return this.obtenerToken?.length > 2 ;
//   }
// }
