import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarswiComponent } from './editarswi.component';

const routes: Routes = [{ path: '', component: EditarswiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarswiRoutingModule { }
