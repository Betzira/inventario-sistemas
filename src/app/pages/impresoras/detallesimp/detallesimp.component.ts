import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Impresoraa } from '../../../shared/models/impresoraa.interface';
import { SrvimpresorasService } from '../srvimpresoras.service';

@Component({
  selector: 'app-detallesimp',
  templateUrl: './detallesimp.component.html',
  styleUrls: ['./detallesimp.component.css']
})
export class DetallesimpComponent implements OnInit {

  impresoraa: Impresoraa;

  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };

  constructor(private router: Router, private impresoraasSvc: SrvimpresorasService) { 
    const navigation = this.router.getCurrentNavigation();
    this.impresoraa = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if ( typeof this.impresoraa == 'undefined') {
      this.router.navigate(['listaimp']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.impresoraa;
    this.router.navigate(['editarimp'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.impresoraasSvc.onDeleteImpresoraas(this.impresoraa.id!);
      alert('Artículo eliminado');
      this.onGoBackToList();
    } catch (err) {
      console.error(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['listaimp']);
  }

}
