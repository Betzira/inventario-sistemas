import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvservidoresService } from '../../../pages/servidores/srvservidores.service';
import { Servidorr } from '../../models/servidorr.interface';

@Component({
  selector: 'app-servidores-form',
  templateUrl: './servidores-form.component.html',
  styleUrls: ['./servidores-form.component.css']
})
export class ServidoresFormComponent implements OnInit {

  servidorr: Servidorr;
  servidorrForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private servidoresSvc: SrvservidoresService) { 
    const navigation = this.router.getCurrentNavigation();
    this.servidorr = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.servidorr == 'undefined') {
      this.router.navigate(['nuevoserv']);
    } else {
      this.servidorrForm.patchValue(this.servidorr!);
    }
  }

  onSave(): void {
    console.log('Cambios guardados', this.servidorrForm.value);
    if(this.servidorrForm.valid){
      const servidorr = this.servidorrForm.value;
      const servidorrId = this.servidorr?.id || null;
      this.servidoresSvc.onSaveServidorr(servidorr, servidorrId! );
      this.servidorrForm.reset();
    }
  }

  isValidField(field: string): string {
    const validatedField = this.servidorrForm!.get(field);
    return (!validatedField!.valid && validatedField!.touched)
      ? 'is-invalid' : validatedField!.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.servidorrForm = this.fb.group(
      {
      modeloserv: ['', [Validators.required]],
      marcaserv: ['', [Validators.required]],
      nombreserv: ['', [Validators.required]],
      serieserv: ['', [Validators.required]],
      ipserv: ['', [Validators.required]],
      macserv: ['', [Validators.required]],
      caracteristicasserv: ['', [Validators.required]]
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['listaserv']);
  }

}
