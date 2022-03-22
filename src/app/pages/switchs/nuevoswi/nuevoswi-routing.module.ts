import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoswiComponent } from './nuevoswi.component';

const routes: Routes = [{ path: '', component: NuevoswiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoswiRoutingModule { }
