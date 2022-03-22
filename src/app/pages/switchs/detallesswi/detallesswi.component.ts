import { Switchh } from './../../../shared/models/switchh.interface';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvswitchsService } from '../srvswitchs.service';

@Component({
  selector: 'app-detallesswi',
  templateUrl: './detallesswi.component.html',
  styleUrls: ['./detallesswi.component.css']
})
export class DetallesswiComponent implements OnInit {

  switchh: Switchh;

  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };

  constructor(private router: Router, private switchhsSvc: SrvswitchsService) { 
    const navigation = this.router.getCurrentNavigation();
    this.switchh = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if ( typeof this.switchh == 'undefined') {
      this.router.navigate(['listaswi']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.switchh;
    this.router.navigate(['editarswi'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.switchhsSvc.onDeleteSwitchhs(this.switchh.id!);
      alert('Artículo eliminado');
      this.onGoBackToList();
    } catch (err) {
      console.error(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['listaswi']);
  }

}
