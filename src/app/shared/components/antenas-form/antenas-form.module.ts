import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AntenasFormComponent } from './antenas-form.component';



@NgModule({
  declarations: [AntenasFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AntenasFormComponent]
})
export class AntenasFormModule { }
