import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CelularesFormComponent } from './celulares-form.component';



@NgModule({
  declarations: [CelularesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CelularesFormComponent]
})
export class CelularesFormModule { }
