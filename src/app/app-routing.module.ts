import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo:'/login', pathMatch:'full' },
  
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }, 
  
  { path: 'lista1', loadChildren: () => import('./pages/inv1/lista1/lista1.module').then(m => m.Lista1Module) }, 
  
  { path: 'detalles1', loadChildren: () => import('./pages/inv1/detalles1/detalles1.module').then(m => m.Detalles1Module) }, 
  
  { path: 'editar1', loadChildren: () => import('./pages/inv1/editar1/editar1.module').then(m => m.Editar1Module) }, 
  
  { path: 'nuevo1', loadChildren: () => import('./pages/inv1/nuevo1/nuevo1.module').then(m => m.Nuevo1Module) },

  { path: 'nuevoant', loadChildren: () => import('./pages/antenas/nuevoant/nuevoant.module').then(m => m.NuevoantModule) },

  { path: 'listaant', loadChildren: () => import('./pages/antenas/listaant/listaant.module').then(m => m.ListaantModule) },

  { path: 'editarant', loadChildren: () => import('./pages/antenas/editarant/editarant.module').then(m => m.EditarantModule) },

  { path: 'detallesant', loadChildren: () => import('./pages/antenas/detallesant/detallesant.module').then(m => m.DetallesantModule) },

  { path: 'detallescel', loadChildren: () => import('./pages/celulares/detallescel/detallescel.module').then(m => m.DetallescelModule) },

  { path: 'editarcel', loadChildren: () => import('./pages/celulares/editarcel/editarcel.module').then(m => m.EditarcelModule) },

  { path: 'listacel', loadChildren: () => import('./pages/celulares/listacel/listacel.module').then(m => m.ListacelModule) },

  { path: 'nuevocel', loadChildren: () => import('./pages/celulares/nuevocel/nuevocel.module').then(m => m.NuevocelModule) },

  { path: 'detallesimp', loadChildren: () => import('./pages/impresoras/detallesimp/detallesimp.module').then(m => m.DetallesimpModule) },

  { path: 'editarimp', loadChildren: () => import('./pages/impresoras/editarimp/editarimp.module').then(m => m.EditarimpModule) },

  { path: 'listaimp', loadChildren: () => import('./pages/impresoras/listaimp/listaimp.module').then(m => m.ListaimpModule) },

  { path: 'nuevoimp', loadChildren: () => import('./pages/impresoras/nuevoimp/nuevoimp.module').then(m => m.NuevoimpModule) },

  { path: 'detallesswi', loadChildren: () => import('./pages/switchs/detallesswi/detallesswi.module').then(m => m.DetallesswiModule) },

  { path: 'editarswi', loadChildren: () => import('./pages/switchs/editarswi/editarswi.module').then(m => m.EditarswiModule) },

  { path: 'listaswi', loadChildren: () => import('./pages/switchs/listaswi/listaswi.module').then(m => m.ListaswiModule) },

  { path: 'nuevoswi', loadChildren: () => import('./pages/switchs/nuevoswi/nuevoswi.module').then(m => m.NuevoswiModule) },

  { path: 'detallesserv', loadChildren: () => import('./pages/servidores/detallesserv/detallesserv.module').then(m => m.DetallesservModule) },

  { path: 'editarserv', loadChildren: () => import('./pages/servidores/editarserv/editarserv.module').then(m => m.EditarservModule) },

  { path: 'listaserv', loadChildren: () => import('./pages/servidores/listaserv/listaserv.module').then(m => m.ListaservModule) },

  { path: 'nuevoserv', loadChildren: () => import('./pages/servidores/nuevoserv/nuevoserv.module').then(m => m.NuevoservModule) },

  { path: 'detallesres', loadChildren: () => import('./pages/resguardos/detallesres/detallesres.module').then(m => m.DetallesresModule) },

  { path: 'editarres', loadChildren: () => import('./pages/resguardos/editarres/editarres.module').then(m => m.EditarresModule) },

  { path: 'listares', loadChildren: () => import('./pages/resguardos/listares/listares.module').then(m => m.ListaresModule) },

  { path: 'nuevores', loadChildren: () => import('./pages/resguardos/nuevores/nuevores.module').then(m => m.NuevoresModule) },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
