import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editar1Component } from './editar1.component';

const routes: Routes = [{ path: '', component: Editar1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Editar1RoutingModule { }
