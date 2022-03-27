import { Servidorr } from './../../../shared/models/servidorr.interface';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvservidoresService } from '../srvservidores.service';

@Component({
  selector: 'app-detallesserv',
  templateUrl: './detallesserv.component.html',
  styleUrls: ['./detallesserv.component.css']
})
export class DetallesservComponent implements OnInit {

  servidorr: Servidorr;

  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };

  constructor(private router: Router, private servidorrsSvc: SrvservidoresService) { 
    const navigation = this.router.getCurrentNavigation();
    this.servidorr = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if ( typeof this.servidorr == 'undefined') {
      this.router.navigate(['listaserv']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.servidorr;
    this.router.navigate(['editarserv'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.servidorrsSvc.onDeleteServidorrs(this.servidorr.id!);
      alert('Artículo eliminado');
      this.onGoBackToList();
    } catch (err) {
      console.error(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['listaserv']);
  }

}
