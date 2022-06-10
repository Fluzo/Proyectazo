import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/userModels';
import { UsuariosAPIService } from 'src/app/services/usuariosAPI/usuarios-api.service';

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.css']
})
export class ModalEditarUsuarioComponent implements OnInit {
  
  @Input() set usuario(value:UserModel){
    if(value){
      this.formulario.patchValue(value)
    }
  }

  @Output() actualizar = new EventEmitter<boolean>();

  formulario: FormGroup = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      iD_PERFIL: new FormControl('', Validators.required)
  });
  
  perfiles: any[] = [];
  user = new UserModel();
  
  private $USER_SUB: Subscription = new Subscription;
  constructor( private servicio: UsuariosAPIService, 
               private fb: FormBuilder) {

    //this.crearFormulario();
   
  }

  ngOnInit(): void {
    this.$USER_SUB = this.servicio.getUser().subscribe( res=>{
      this.user = res;
      this.crearFormulario();

    });
      this.servicio.consultarPerfiles().subscribe((data)=>{
      console.log(data)     
      this.perfiles = data.data;
    });
    
    
  }

  // refresh(): void {
  //   window.location.reload();
  // }


  crearFormulario(){
  
  this.formulario.patchValue(this.user);

     this.formulario = this.fb.group({
      usuario: new FormControl(this.user.usuario, [Validators.required]),
      email: new FormControl(this.user.email, Validators.required),
      password: new FormControl(this.user.password, Validators.required),
      iD_PERFIL: new FormControl(this.user.iD_PERFIL, Validators.required)
    }); 
  }

  guardar() {
    this.formulario.getRawValue()
    console.log(this.formulario);
      if ( this.formulario.invalid ) {
        console.log('Formulario no válido');
        return;
       }
       let body: UserModel = this.formulario.value;
       body.iD_USUARIO = this.user.iD_USUARIO;
       console.log(body);
       this.servicio.editarUsuario(body)
        .subscribe(resp =>{
          console.log(resp);
           //this.user = resp;
           console.log(this.user);
           this.actualizar.emit(true);  
        });     
  }
}
