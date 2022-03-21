import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarcelComponent } from './editarcel.component';

const routes: Routes = [{ path: '', component: EditarcelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarcelRoutingModule { }
