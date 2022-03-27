import { Resguardoo } from './../../models/resguardoo.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvresguardosService } from '../../../pages/resguardos/srvresguardos.service';

@Component({
  selector: 'app-resguardos-form',
  templateUrl: './resguardos-form.component.html',
  styleUrls: ['./resguardos-form.component.css']
})
export class ResguardosFormComponent implements OnInit {

  resguardoo: Resguardoo;
  resguardooForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private resguardosSvc: SrvresguardosService) { 
    const navigation = this.router.getCurrentNavigation();
    this.resguardoo = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.resguardoo == 'undefined') {
      this.router.navigate(['nuevores']);
    } else {
      this.resguardooForm.patchValue(this.resguardoo!);
    }
  }

  onSave(): void {
    console.log('Cambios guardados', this.resguardooForm.value);
    if(this.resguardooForm.valid){
      const resguardoo = this.resguardooForm.value;
      const resguardooId = this.resguardoo?.id || null;
      this.resguardosSvc.onSaveResguardoo(resguardoo, resguardooId! );
      this.resguardooForm.reset();
    }
  }

  isValidField(field: string): string {
    const validatedField = this.resguardooForm!.get(field);
    return (!validatedField!.valid && validatedField!.touched)
      ? 'is-invalid' : validatedField!.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.resguardooForm = this.fb.group(
      {
      articulores: ['', [Validators.required]],
      marcares: ['', [Validators.required]],
      modelores: ['', [Validators.required]],
      cantidadres: ['', [Validators.required]]
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['listares']);
  }

}
