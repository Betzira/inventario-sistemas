import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoresComponent } from './nuevores.component';

const routes: Routes = [{ path: '', component: NuevoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoresRoutingModule { }
