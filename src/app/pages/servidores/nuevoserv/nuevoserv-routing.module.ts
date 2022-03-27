import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoservComponent } from './nuevoserv.component';

const routes: Routes = [{ path: '', component: NuevoservComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoservRoutingModule { }
