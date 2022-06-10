import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {

   white: string = '#ffffff';
   black: string = '#141313';

   private _darkTheme: Subject<boolean> = new Subject<boolean>();

   themeDark = this._darkTheme.asObservable();

  constructor() { 
    
  }
  // status(){
  //  const check = document.getElementById("night-light-checkbox") as HTMLInputElement;
  //  if(check.checked == true){
  //   localStorage.setItem('dark', 'true')
  //  }

  // }
  

  setDarkTheme( themeDark: boolean ) {
    this._darkTheme.next(themeDark);
    // let bola = document.getElementById('bola');
    
    if (themeDark == true) {
      console.log('Modo oscuro');
      // bola?.classList.add('noche');
      document.documentElement.style.setProperty('--background-color', this.black);
      document.documentElement.style.setProperty('--social', this.white);
      document.documentElement.style.setProperty('--text-color', this.white);
      document.documentElement.style.setProperty('--boton-background', this.white);

      localStorage.setItem('dark', 'true')
    }
    else {
      console.log('Modo claro');
      // bola?.classList.remove('noche');
      document.documentElement.style.setProperty('--background-color', this.white);
      document.documentElement.style.setProperty('--social', this.black);
      document.documentElement.style.setProperty('--text-color', this.black);
      document.documentElement.style.setProperty('--boton-background', '--boton-background');

      localStorage.setItem('dark', 'false');
    }
  }

}
