import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { throwError } from 'rxjs';
// import { Articulo } from 'src/app/shared/models/articulo1.interface';

@Component({
  // selector: 'app-editar1',
  template: `<app-articulo-form></app-articulo-form>`,
  // styleUrls: ['./editar1.component.css']
})
export class Editar1Component {

  // value: Articulo ; //value = null;
  // lista1Form! : FormGroup;

  // constructor( private router: Router, private fb: FormBuilder) {
  //   const navigation = this.router.getCurrentNavigation();
  //   this.value = navigation?.extras?.state?.value;
  //   this.initForm();
  //  }

  


  //   if (typeof this.value == 'undefined'){
  //     this.router.navigate(['nuevo1']);
  //   } else {
  //     this.lista1Form.patchValue(this.value);
    // }

  // }

  // private initForm(): void {
  //   this.lista1Form = this.fb.group(
  //     {
  //     articulo: ['', [Validators.required]],
  //     marca: ['', [Validators.required]],
  //     serie: ['', [Validators.required]],
  //     ip: ['', [Validators.required]],
  //     nota: ['', [Validators.required]]
  //     }
  //   );
  // }

  // onSave(): any {
  //   console.log('Cambios guardados', this.lista1Form.value);
  // }

  // onGoBackToList(): void {
  //   this.router.navigate(['lista1']);
  // }

}
