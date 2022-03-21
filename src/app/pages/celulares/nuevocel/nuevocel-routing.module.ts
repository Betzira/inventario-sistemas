import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevocelComponent } from './nuevocel.component';

const routes: Routes = [{ path: '', component: NuevocelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevocelRoutingModule { }
