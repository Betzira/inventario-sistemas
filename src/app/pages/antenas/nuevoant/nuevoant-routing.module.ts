import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoantComponent } from './nuevoant.component';

const routes: Routes = [{ path: '', component: NuevoantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoantRoutingModule { }
