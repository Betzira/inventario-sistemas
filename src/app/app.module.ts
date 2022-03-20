import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ArticuloFormComponent } from './shared/components/articulo-form/articulo-form.component';
import { ArticuloFormModule } from './shared/components/articulo-form/articulo-form.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    // ArticuloFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticuloFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }