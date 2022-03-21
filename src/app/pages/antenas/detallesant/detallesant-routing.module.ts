import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesantComponent } from './detallesant.component';

const routes: Routes = [{ path: '', component: DetallesantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesantRoutingModule { }
