import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticuloFormComponent } from './articulo-form.component';



@NgModule({
  declarations: [ ArticuloFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ArticuloFormComponent]
})
export class ArticuloFormModule { }
