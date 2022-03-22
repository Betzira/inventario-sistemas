import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesswiComponent } from './detallesswi.component';

const routes: Routes = [{ path: '', component: DetallesswiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesswiRoutingModule { }
