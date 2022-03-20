import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Articulo } from 'src/app/shared/models/articulo1.interface';
import { Srvinv1Service } from '../srvinv1.service';

@Component({
  selector: 'app-detalles1',
  templateUrl: './detalles1.component.html',
  styleUrls: ['./detalles1.component.css']
})
export class Detalles1Component implements OnInit {

  articulo: Articulo; //value = null;
  
  navigationExtras: NavigationExtras = {
    state!: {
    // state!: {
      value: null
    }
  };

  //articulo: any = null ; //value = null;
  constructor( private router: Router, private articulosSvc: Srvinv1Service ) {
    const navigation = this.router.getCurrentNavigation();
    this.articulo = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
    if ( typeof this.articulo == 'undefined' ){
      this.router.navigate(['lista1']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.articulo;
    this.router.navigate(['editar1'], this.navigationExtras);
    // this.router.navigate(['editar1'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.articulosSvc.onDeleteArticulos(this.articulo.id!);
      alert('Artículo eliminado');
      this.onGoBackToList();
    } catch (err) {
      console.log(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['lista1']);
  }

}
