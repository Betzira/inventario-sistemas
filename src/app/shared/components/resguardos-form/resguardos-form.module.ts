import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ResguardosFormComponent } from './resguardos-form.component';



@NgModule({
  declarations: [ResguardosFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ResguardosFormComponent]
})
export class ResguardosFormModule { }
