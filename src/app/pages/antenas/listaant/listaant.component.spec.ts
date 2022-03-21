import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaantComponent } from './listaant.component';

describe('ListaantComponent', () => {
  let component: ListaantComponent;
  let fixture: ComponentFixture<ListaantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
