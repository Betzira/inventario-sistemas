import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarresComponent } from './editarres.component';

const routes: Routes = [{ path: '', component: EditarresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarresRoutingModule { }
