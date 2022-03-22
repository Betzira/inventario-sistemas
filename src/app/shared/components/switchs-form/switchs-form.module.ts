import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchsFormComponent } from './switchs-form.component';



@NgModule({
  declarations: [SwitchsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SwitchsFormComponent]
})
export class SwitchsFormModule { }
