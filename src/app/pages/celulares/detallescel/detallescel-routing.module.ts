import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallescelComponent } from './detallescel.component';

const routes: Routes = [{ path: '', component: DetallescelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallescelRoutingModule { }
