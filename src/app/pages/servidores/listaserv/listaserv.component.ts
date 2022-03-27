import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvservidoresService } from '../srvservidores.service';

@Component({
  selector: 'app-listaserv',
  templateUrl: './listaserv.component.html',
  styleUrls: ['./listaserv.component.css']
})
export class ListaservComponent implements OnInit {
  servidorrs$ = this.servidorrsSvc.servidorrs;
  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };


  constructor(private router: Router, private servidorrsSvc: SrvservidoresService) { }

  ngOnInit(): void {
  }

  onGoToEdit(itemserv: any): void {
    this.navigationExtras.state!.value = itemserv;
    this.router.navigate(['editarserv'], this.navigationExtras);
  }

  onGoToSee(itemserv: any): void {
    this.navigationExtras.state!.value = itemserv;
    this.router.navigate(['detallesserv'], this.navigationExtras);
  }

  async onGoToDelete(servId: string): Promise<void> {
    try {
      await this.servidorrsSvc.onDeleteServidorrs(servId);
      alert('Artículo eliminado');
    } catch (err) {
      console.error(err);
    }
  }

}
