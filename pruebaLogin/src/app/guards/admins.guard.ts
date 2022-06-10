import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminsGuard implements CanActivate {

  perfil! : any;


  constructor( private router: Router) {    

    
  }
  
  async canActivate(): Promise<boolean> {
    
    this.perfil = localStorage.getItem('iD_PERFIL');
    console.log(this.perfil);
    if(this.perfil == 1){
      console.log('guard verdadero');
      console.log(this.perfil);
      
      return true; 


    // if(localStorage.getItem('2')){
    //   console.log('guard verdadero');
      
    //   return true; 

    }else{
      console.log('guard falso');
       this.router.navigateByUrl('/home');
       return false
    }
  }
  
}
