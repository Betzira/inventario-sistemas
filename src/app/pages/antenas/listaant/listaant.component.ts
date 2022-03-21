import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SrvantenasService } from '../srvantenas.service';

@Component({
  selector: 'app-listaant',
  templateUrl: './listaant.component.html',
  styleUrls: ['./listaant.component.css']
})
export class ListaantComponent implements OnInit {
  antenaas$ = this.antenaasSvc.antenaas;
  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };

  // fakeData = [
  //   {
  //     articuloant:'antena articulo1',
  //     marcaant:'antena mar1',
  //     modeloant:'antena mod1',
  //     ipant:'antena ip1',
  //     macant:'antena mac1',
  //     redant:'antena red1',
  //     ubiant:'antena ub1'
  //   },
  //   {
  //     articuloant:'antena arti2',
  //     marcaant:'antena mar2',
  //     modeloant:'antena mod2',
  //     ipant:'antena ip2',
  //     macant:'antena mac2',
  //     redant:'antena red2',
  //     ubiant:'antena ub2'
  //   },
  //   {
  //     articuloant:'antena arti3',
  //     marcaant:'antena mar3',
  //     modeloant:'antena mod3',
  //     ipant:'antena ip3',
  //     macant:'antena mac3',
  //     redant:'antena red3',
  //     ubiant:'antena ub3'
  //   }
  // ]

  constructor(private router: Router, private antenaasSvc: SrvantenasService) { }

  ngOnInit(): void {
  }

  onGoToEdit(itemant: any): void {
    this.navigationExtras.state!.value = itemant;
    this.router.navigate(['editarant'], this.navigationExtras);
  }

  onGoToSee(itemant: any): void {
    this.navigationExtras.state!.value = itemant;
    this.router.navigate(['detallesant'], this.navigationExtras);
  }

  async onGoToDelete(antId: string): Promise<void> {
    try {
      await this.antenaasSvc.onDeleteAntenaas(antId);
      alert('Artículo eliminado');
    } catch (err) {
      console.error(err);
    }
  }

}
