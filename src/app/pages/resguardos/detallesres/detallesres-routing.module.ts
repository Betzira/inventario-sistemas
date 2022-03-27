import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesresComponent } from './detallesres.component';

const routes: Routes = [{ path: '', component: DetallesresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesresRoutingModule { }
