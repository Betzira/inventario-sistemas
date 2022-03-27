import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ServidoresFormComponent } from './servidores-form.component';



@NgModule({
  declarations: [ServidoresFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ServidoresFormComponent]
})
export class ServidoresFormModule { }
