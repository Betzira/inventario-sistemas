import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Antenaa } from '../../../shared/models/antenaa.interface';
import { SrvantenasService } from '../srvantenas.service';

@Component({
  selector: 'app-detallesant',
  templateUrl: './detallesant.component.html',
  styleUrls: ['./detallesant.component.css']
})
export class DetallesantComponent implements OnInit {

  // antenaa: Antenaa = null;
  antenaa: Antenaa;

  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };

  constructor(private router: Router, private antenaasSvc: SrvantenasService) { 
    const navigation = this.router.getCurrentNavigation();
    this.antenaa = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if ( typeof this.antenaa == 'undefined') {
      this.router.navigate(['listaant']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.antenaa;
    this.router.navigate(['editarant'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.antenaasSvc.onDeleteAntenaas(this.antenaa.id!);
      alert('Artículo eliminado');
      this.onGoBackToList();
    } catch (err) {
      console.error(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['listaant']);
  }

}
