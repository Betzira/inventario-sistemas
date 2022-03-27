import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesservComponent } from './detallesserv.component';

const routes: Routes = [{ path: '', component: DetallesservComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesservRoutingModule { }
