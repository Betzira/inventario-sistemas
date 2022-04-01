import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvswitchsService } from '../../../pages/switchs/srvswitchs.service';
import { Switchh } from '../../models/switchh.interface';

@Component({
  selector: 'app-switchs-form',
  templateUrl: './switchs-form.component.html',
  styleUrls: ['./switchs-form.component.css']
})
export class SwitchsFormComponent implements OnInit {

  switchh: Switchh;
  switchhForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private switchsSvc: SrvswitchsService) { 
    const navigation = this.router.getCurrentNavigation();
    this.switchh = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.switchh == 'undefined') {
      this.router.navigate(['nuevoswi']);
    } else {
      this.switchhForm.patchValue(this.switchh!);
    }
  }

  onSave(): void {
    console.log('Cambios guardados', this.switchhForm.value);
    if(this.switchhForm.valid){
      const switchh = this.switchhForm.value;
      const switchhId = this.switchh?.id || null;
      this.switchsSvc.onSaveSwitchh(switchh, switchhId! );
      this.switchhForm.reset();
    }
  }

  isValidField(field: string): string {
    const validatedField = this.switchhForm!.get(field);
    return (!validatedField!.valid && validatedField!.touched)
      ? 'is-invalid' : validatedField!.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.switchhForm = this.fb.group(
      {
      marcaswi: ['', [Validators.required]],
      modeloswi: ['', [Validators.required]],
      ubiswi: ['', [Validators.required]],
      serieswi: ['', [Validators.required]],
      puertoswi: ['', [Validators.required]],
      redswi: ['', [Validators.required]],
      departamentoswi: ['', [Validators.required]]
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['listaswi']);
  }

}

