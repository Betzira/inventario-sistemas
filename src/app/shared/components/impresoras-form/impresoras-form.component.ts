import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvimpresorasService } from '../../../pages/impresoras/srvimpresoras.service';
import { Impresoraa } from '../../models/impresoraa.interface';

@Component({
  selector: 'app-impresoras-form',
  templateUrl: './impresoras-form.component.html',
  styleUrls: ['./impresoras-form.component.css']
})
export class ImpresorasFormComponent implements OnInit {

  impresoraa: Impresoraa;
  impresoraaForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private impresorasSvc: SrvimpresorasService) { 
    const navigation = this.router.getCurrentNavigation();
    this.impresoraa = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.impresoraa == 'undefined') {
      this.router.navigate(['nuevoimp']);
    } else {
      this.impresoraaForm.patchValue(this.impresoraa!);
    }
  }

  onSave(): void {
    console.log('Cambios guardados', this.impresoraaForm.value);
    if(this.impresoraaForm.valid){
      const impresoraa = this.impresoraaForm.value;
      const impresoraaId = this.impresoraa?.id || null;
      this.impresorasSvc.onSaveImpresoraa(impresoraa, impresoraaId! );
      this.impresoraaForm.reset();
    }
  }

  isValidField(field: string): string {
    const validatedField = this.impresoraaForm!.get(field);
    return (!validatedField!.valid && validatedField!.touched)
      ? 'is-invalid' : validatedField!.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.impresoraaForm = this.fb.group(
      {
      articuloimp: ['Mini Printer', [Validators.required]],
      marcaimp: ['', [Validators.required]],
      modeloimp: ['', [Validators.required]],
      ubiimp: ['', [Validators.required]],
      serieimp: ['', [Validators.required]]
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['listaimp']);
  }

}
