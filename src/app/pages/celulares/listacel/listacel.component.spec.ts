import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacelComponent } from './listacel.component';

describe('ListacelComponent', () => {
  let component: ListacelComponent;
  let fixture: ComponentFixture<ListacelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
