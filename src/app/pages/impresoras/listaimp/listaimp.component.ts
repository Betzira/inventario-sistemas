import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvimpresorasService } from '../srvimpresoras.service';

@Component({
  selector: 'app-listaimp',
  templateUrl: './listaimp.component.html',
  styleUrls: ['./listaimp.component.css']
})
export class ListaimpComponent implements OnInit {
  impresoraas$ = this.impresoraasSvc.impresoraas;
  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };


  constructor(private router: Router, private impresoraasSvc: SrvimpresorasService) { }

  ngOnInit(): void {
  }

  onGoToEdit(itemimp: any): void {
    this.navigationExtras.state!.value = itemimp;
    this.router.navigate(['editarimp'], this.navigationExtras);
  }

  onGoToSee(itemimp: any): void {
    this.navigationExtras.state!.value = itemimp;
    this.router.navigate(['detallesimp'], this.navigationExtras);
  }

  async onGoToDelete(impId: string): Promise<void> {
    try {
      await this.impresoraasSvc.onDeleteImpresoraas(impId);
      alert('Artículo eliminado');
    } catch (err) {
      console.error(err);
    }
  }

}
