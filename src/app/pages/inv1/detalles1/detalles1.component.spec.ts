import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalles1Component } from './detalles1.component';

describe('Detalles1Component', () => {
  let component: Detalles1Component;
  let fixture: ComponentFixture<Detalles1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalles1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalles1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
