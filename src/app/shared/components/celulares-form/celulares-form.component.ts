import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvcelularesService } from 'src/app/pages/celulares/srvcelulares.service';
import { Celularr } from '../../models/celularr.interface';

@Component({
  selector: 'app-celulares-form',
  templateUrl: './celulares-form.component.html',
  styleUrls: ['./celulares-form.component.css']
})
export class CelularesFormComponent implements OnInit {

  celularr: Celularr;
  celularrForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private celularesSvc: SrvcelularesService) { 
    const navigation = this.router.getCurrentNavigation();
    this.celularr = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.celularr == 'undefined') {
      this.router.navigate(['nuevocel']);
    } else {
      this.celularrForm.patchValue(this.celularr!);
    }
  }

  onSave(): void {
    console.log('Cambios guardados', this.celularrForm.value);
    if(this.celularrForm.valid){
      const celularr = this.celularrForm.value;
      const celularrId = this.celularr?.id || null;
      this.celularesSvc.onSaveCelularr(celularr, celularrId! );
      this.celularrForm.reset();
    }
  }

  isValidField(field: string): string {
    const validatedField = this.celularrForm!.get(field);
    return (!validatedField!.valid && validatedField!.touched)
      ? 'is-invalid' : validatedField!.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.celularrForm = this.fb.group(
      {
      usuariocel: ['', [Validators.required]],
      articulocel: ['', [Validators.required]],
      marcacel: ['', [Validators.required]],
      modelocel: ['', [Validators.required]],
      telefonocel: ['', [Validators.required]],
      mailcel: ['', [Validators.required]],
      caractcel: ['', [Validators.required]],
      maccel: ['', [Validators.required]],
      seriecel: ['', [Validators.required]]
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['listacel']);
  }

}
