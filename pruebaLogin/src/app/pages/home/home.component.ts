import { Component, OnInit } from '@angular/core';
import { DarkThemeService } from 'src/app/services/dark-theme/dark-theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  themeDark!: Observable<boolean>;

  constructor( private modoOscuro: DarkThemeService) { }

  ngOnInit(): void {
    this.themeDark = this.modoOscuro.themeDark;
    // this.porDefecto(false);

    // checkbox = localStorage.getItem('dark')
    localStorage.setItem('dark', 'false')
    
  }


  // get value(): any{
  //   return this.isChecked;
  // }

  // isChecked = false;

  // set value(value:any){
  //   if (this.isChecked !== true){
  //     this.isChecked = value;
  //   }
  // }

  // status(){
  //   const check = document.getElementById("night-light-checkbox") as HTMLInputElement;
  //   if(check.checked === true){
  //    localStorage.setItem('dark', 'true')
  //   }
  //   else{
  //     localStorage.setItem('dark', 'false')

  //   }
 
  //  }

  
  cambiarModo(checked: any) {
    this.modoOscuro.setDarkTheme(checked.checked);
    console.log("checked >", this.themeDark);
    console.log("checked >", checked.checked);
  }
  
  // porDefecto(checked:boolean){
  //   let modo = localStorage.getItem('dark');
  //   console.log(modo);
  //   let bola = document.getElementById('bola');
  //   // let checkbox = document.getElementById('checkbox')
    
  //   if(modo === 'true'){
  //     this.modoOscuro.setDarkTheme(true);
  //     bola?.classList.add('noche');
      


  //   }else{
  //     this.modoOscuro.setDarkTheme(false);
  //     bola?.classList.remove('noche');
    
  //   }

    
  // }
}
