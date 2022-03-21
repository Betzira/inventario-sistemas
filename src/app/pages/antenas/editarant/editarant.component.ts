import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Antenaa } from '../../../shared/models/antenaa.interface';

@Component({
  template: `<app-antenas-form></app-antenas-form>`,
  // styleUrls: ['./editarant.component.css']
})
export class EditarantComponent {
  // antenaa: Antenaa;
  // antenaaForm!: FormGroup;
  // constructor(private router: Router, private fb: FormBuilder) { 
  //   const navigation = this.router.getCurrentNavigation();
  //   this.antenaa = navigation?.extras?.state?.value;
  //   this.initForm();
  // }

  // ngOnInit(): void {
  //   if(typeof this.antenaa == 'undefined') {
  //     this.router.navigate(['nuevoant']);
  //   } else {
  //     this.antenaaForm.patchValue(this.antenaa!);
  //   }
  // }

  // onSave(): void {
  //   console.log('Cambios guardados', this.antenaaForm.value);
  // }

  // private initForm(): void {
  //   this.antenaaForm = this.fb.group(
  //     {
  //     articuloant: ['Antena', [Validators.required]],
  //     marcaant: ['', [Validators.required]],
  //     modeloant: ['', [Validators.required]],
  //     ipant: ['', [Validators.required]],
  //     macant: ['', [Validators.required]],
  //     redant: ['', [Validators.required]],
  //     ubiant: ['', [Validators.required]]
  //   });
  // }

  // onGoBackToList(): void {
  //   this.router.navigate(['listaant']);
  // }

}
