import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  constructor( private formB: FormBuilder ) {

    this.createForm();

   }

   ngOnInit(): void {
  }

// esta parte es para que el input se ponga rojo/ invalido cuando lo toquemos o un campo no esté bien
   get emailInvalido(){
     return this.formulario.get('email')?.invalid && this.formulario.get('email')?.touched
   }

   get passwordInvalido(){
    return this.formulario.get('password')?.invalid && this.formulario.get('password')?.touched
  }
// esta parte es para que el input se ponga rojo/ invalido cuando lo toquemos o un campo no esté bien

createForm(){
  this.formulario = this.formB.group(
    {
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15) ]]
    }
  );
}
   

  

  save(): any {
    // ESTO ES SOLO PARA GUARDAR
    console.log(this.formulario); 
    // ESTO ES PARA EL BOTON Y LOS INVALID0
    if(this.formulario.invalid){
      return Object.values(this.formulario.controls).forEach ( controlsito =>{
        controlsito.markAsTouched();
      } );
    }
    
  }

}
