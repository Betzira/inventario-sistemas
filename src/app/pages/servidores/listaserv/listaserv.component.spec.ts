import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaservComponent } from './listaserv.component';

describe('ListaservComponent', () => {
  let component: ListaservComponent;
  let fixture: ComponentFixture<ListaservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
