import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/userModels';
import { LoginRegistroService } from 'src/app/services/login-registro/login-registro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = new UserModel;
  private $USER_SUB: Subscription = new Subscription;



  constructor( public servicio : LoginRegistroService ) { 
    
  }

  refresh(){
    (localStorage.getItem('token') && localStorage.getItem('token') != "") ? this.user.logged = true: this.user.logged = false;
  }

  logout(){
  // localStorage.clear();
  localStorage.removeItem('token');
  localStorage.removeItem('iD_PERFIL');
  this.user.logged = false;
  console.log(this.user);
  }

  ngOnInit(): void {

    this.$USER_SUB = this.servicio.getUser().subscribe( res=>{
      this.user = res;
      console.log(res);
    });

    this.refresh();
    
  }
}
