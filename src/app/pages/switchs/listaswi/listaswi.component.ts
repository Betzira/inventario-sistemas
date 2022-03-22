import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SrvswitchsService } from '../srvswitchs.service';

@Component({
  selector: 'app-listaswi',
  templateUrl: './listaswi.component.html',
  styleUrls: ['./listaswi.component.css']
})
export class ListaswiComponent implements OnInit {
  switchhs$ = this.switchhsSvc.switchhs;
  navigationExtras : NavigationExtras = {
    state!: {
      value: null
    }
  };


  constructor(private router: Router, private switchhsSvc: SrvswitchsService) { }

  ngOnInit(): void {
  }

  onGoToEdit(itemswi: any): void {
    this.navigationExtras.state!.value = itemswi;
    this.router.navigate(['editarswi'], this.navigationExtras);
  }

  onGoToSee(itemswi: any): void {
    this.navigationExtras.state!.value = itemswi;
    this.router.navigate(['detallesswi'], this.navigationExtras);
  }

  async onGoToDelete(swiId: string): Promise<void> {
    try {
      await this.switchhsSvc.onDeleteSwitchhs(swiId);
      alert('Artículo eliminado');
    } catch (err) {
      console.error(err);
    }
  }

}
