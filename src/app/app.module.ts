import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ArticuloFormComponent } from './shared/components/articulo-form/articulo-form.component';
import { ArticuloFormModule } from './shared/components/articulo-form/articulo-form.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
// import { AntenasFormComponent } from './shared/components/antenas-form/antenas-form.component';
import { AntenasFormModule } from './shared/components/antenas-form/antenas-form.module';
// import { CelularesFormComponent } from './shared/components/celulares-form/celulares-form.component';
import { CelularesFormModule } from './shared/components/celulares-form/celulares-form.module';
// import { ImpresorasFormComponent } from './shared/components/impresoras-form/impresoras-form.component';
import { ImpresorasFormModule } from './shared/components/impresoras-form/impresoras-form.module';

@NgModule({
  declarations: [
    AppComponent,
    // ImpresorasFormComponent,
    // CelularesFormComponent,
    // AntenasFormComponent,
    // ArticuloFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticuloFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AntenasFormModule,
    CelularesFormModule,
    ImpresorasFormModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
