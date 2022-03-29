import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Srvinv1Service } from 'src/app/pages/inv1/srvinv1.service';
import { Articulo } from '../../models/articulo1.interface';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent implements OnInit {

  articulo : Articulo ; //value = null;
  lista1Form! : FormGroup;

  constructor( private router: Router, private fb: FormBuilder, private articuloSvc: Srvinv1Service ) {
    const navigation = this.router.getCurrentNavigation();
    this.articulo = navigation?.extras?.state?.value;
    this.initForm();
   }

  

  ngOnInit(): void {

    if (typeof this.articulo == 'undefined'){
      this.router.navigate(['nuevo1']);
    } else {
      this.lista1Form.patchValue(this.articulo);
    }

  }

  // isValidField(field: string): string {
  //   const validatedField = this.lista1Form.get(field);
  //   return ( validatedField!.valid && validatedField!.touched )
  //   ? 'is-invalid' : validatedField!.touched? 'is.valid' : '';
  // }

  isValidField(field: string): string {
    const validatedField = this.lista1Form!.get(field);
    return (!validatedField!.valid && validatedField!.touched)
      ? 'is-invalid' : validatedField!.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.lista1Form = this.fb.group(
      {
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      serie: ['', [Validators.required]],
      ip: ['172.16.50.', [Validators.required]],
      mac: ['', [Validators.required]],
      accesorios: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]]
      }
    );
  }

  onSave(): any {
    console.log('Cambios guardados', this.lista1Form.value);
    if (this.lista1Form.valid){
      const articulo = this.lista1Form.value;
      // const articuloId = this.articulo?.id || null;
      const articuloId = this.articulo?.id || null;
      this.articuloSvc.onSaveArticulo(articulo , articuloId! );
      this.lista1Form.reset();
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['lista1']);
  }

}

