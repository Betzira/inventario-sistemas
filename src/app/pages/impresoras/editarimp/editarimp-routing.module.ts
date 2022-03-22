import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarimpComponent } from './editarimp.component';

const routes: Routes = [{ path: '', component: EditarimpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarimpRoutingModule { }
