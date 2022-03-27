import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaresComponent } from './listares.component';

describe('ListaresComponent', () => {
  let component: ListaresComponent;
  let fixture: ComponentFixture<ListaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
