import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadorContrasenaService {

  constructor() { }

  contrasenasIguales( contrasena1: string, contrasena2: string) {
    return ( formRegistro: FormGroup) => {
      const contrasenaControl = formRegistro.controls[contrasena1];
      const contrasena2Control = formRegistro.controls[contrasena2];

      if (contrasenaControl.value === contrasena2Control.value) {
        contrasena2Control.setErrors(null);
      } else {
        contrasena2Control.setErrors({noEsIgual: true});
      }
    }
  }



}
