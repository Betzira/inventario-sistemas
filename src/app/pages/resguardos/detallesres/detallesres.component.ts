import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvresguardosService } from '../srvresguardos.service';
import { Resguardoo } from '../../../shared/models/resguardoo.interface';

@Component({
  selector: 'app-detallesres',
  templateUrl: './detallesres.component.html',
  styleUrls: ['./detallesres.component.css']
})
export class DetallesresComponent implements OnInit {

  resguardoo: Resguardoo;

  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };

  constructor(private router: Router, private resguardoosSvc: SrvresguardosService) { 
    const navigation = this.router.getCurrentNavigation();
    this.resguardoo = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if ( typeof this.resguardoo == 'undefined') {
      this.router.navigate(['listares']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.resguardoo;
    this.router.navigate(['editarres'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.resguardoosSvc.onDeleteResguardoos(this.resguardoo.id!);
      alert('Artículo eliminado');
      this.onGoBackToList();
    } catch (err) {
      console.error(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['listares']);
  }

}
