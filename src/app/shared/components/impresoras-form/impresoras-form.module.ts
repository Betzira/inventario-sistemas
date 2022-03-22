import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImpresorasFormComponent } from './impresoras-form.component';



@NgModule({
  declarations: [ImpresorasFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ImpresorasFormComponent]
})
export class ImpresorasFormModule { }
