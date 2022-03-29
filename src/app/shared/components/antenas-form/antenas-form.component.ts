import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Antenaa } from '../../models/antenaa.interface';
import { SrvantenasService } from '../../../pages/antenas/srvantenas.service';

@Component({
  selector: 'app-antenas-form',
  templateUrl: './antenas-form.component.html',
  styleUrls: ['./antenas-form.component.css']
})
export class AntenasFormComponent implements OnInit {
  antenaa: Antenaa;
  antenaaForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private antenasSvc: SrvantenasService) { 
    const navigation = this.router.getCurrentNavigation();
    this.antenaa = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.antenaa == 'undefined') {
      this.router.navigate(['nuevoant']);
    } else {
      this.antenaaForm.patchValue(this.antenaa!);
    }
  }

  onSave(): void {
    console.log('Cambios guardados', this.antenaaForm.value);
    if(this.antenaaForm.valid){
      const antenaa = this.antenaaForm.value;
      const antenaaId = this.antenaa?.id || null;
      this.antenasSvc.onSaveAntenaa(antenaa, antenaaId! );
      this.antenaaForm.reset();
    }
  }

  isValidField(field: string): string {
    const validatedField = this.antenaaForm!.get(field);
    return (!validatedField!.valid && validatedField!.touched)
      ? 'is-invalid' : validatedField!.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.antenaaForm = this.fb.group(
      {
      // articuloant: ['Antena', [Validators.required]],
      marcaant: ['', [Validators.required]],
      modeloant: ['', [Validators.required]],
      ipant: ['', [Validators.required]],
      macant: ['', [Validators.required]],
      redant: ['', [Validators.required]],
      ubiant: ['', [Validators.required]]
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['listaant']);
  }

}
