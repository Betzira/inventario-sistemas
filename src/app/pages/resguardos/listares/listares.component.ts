import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvresguardosService } from '../srvresguardos.service';

@Component({
  selector: 'app-listares',
  templateUrl: './listares.component.html',
  styleUrls: ['./listares.component.css']
})
export class ListaresComponent implements OnInit {
  resguardoos$ = this.resguardoosSvc.resguardoos;
  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };


  constructor(private router: Router, private resguardoosSvc: SrvresguardosService) { }

  ngOnInit(): void {
  }

  onGoToEdit(itemres: any): void {
    this.navigationExtras.state!.value = itemres;
    this.router.navigate(['editarres'], this.navigationExtras);
  }

  onGoToSee(itemres: any): void {
    this.navigationExtras.state!.value = itemres;
    this.router.navigate(['detallesres'], this.navigationExtras);
  }

  async onGoToDelete(resId: string): Promise<void> {
    try {
      await this.resguardoosSvc.onDeleteResguardoos(resId);
      alert('Artículo eliminado');
    } catch (err) {
      console.error(err);
    }
  }

}
