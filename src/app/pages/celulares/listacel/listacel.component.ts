import { SrvcelularesService } from './../srvcelulares.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listacel',
  templateUrl: './listacel.component.html',
  styleUrls: ['./listacel.component.css']
})
export class ListacelComponent implements OnInit {
  celularrs$ = this.celularrsSvc.celularrs;
  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };


  constructor(private router: Router, private celularrsSvc: SrvcelularesService) { }

  ngOnInit(): void {
  }

  onGoToEdit(itemcel: any): void {
    this.navigationExtras.state!.value = itemcel;
    this.router.navigate(['editarcel'], this.navigationExtras);
  }

  onGoToSee(itemcel: any): void {
    this.navigationExtras.state!.value = itemcel;
    this.router.navigate(['detallescel'], this.navigationExtras);
  }

  async onGoToDelete(celId: string): Promise<void> {
    try {
      await this.celularrsSvc.onDeleteCelularrs(celId);
      alert('Artículo eliminado');
    } catch (err) {
      console.error(err);
    }
  }

}
