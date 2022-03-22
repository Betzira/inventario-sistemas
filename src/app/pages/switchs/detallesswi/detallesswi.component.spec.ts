import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesswiComponent } from './detallesswi.component';

describe('DetallesswiComponent', () => {
  let component: DetallesswiComponent;
  let fixture: ComponentFixture<DetallesswiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesswiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesswiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
