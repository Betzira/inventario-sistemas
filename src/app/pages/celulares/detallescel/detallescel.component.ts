import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Celularr } from 'src/app/shared/models/celularr.interface';
import { SrvcelularesService } from '../srvcelulares.service';

@Component({
  selector: 'app-detallescel',
  templateUrl: './detallescel.component.html',
  styleUrls: ['./detallescel.component.css']
})
export class DetallescelComponent implements OnInit {

  celularr: Celularr;

  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };

  constructor(private router: Router, private celularrsSvc: SrvcelularesService) { 
    const navigation = this.router.getCurrentNavigation();
    this.celularr = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if ( typeof this.celularr == 'undefined') {
      this.router.navigate(['listacel']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.celularr;
    this.router.navigate(['editarcel'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.celularrsSvc.onDeleteCelularrs(this.celularr.id!);
      alert('Artículo eliminado');
      this.onGoBackToList();
    } catch (err) {
      console.error(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['listacel']);
  }

}
