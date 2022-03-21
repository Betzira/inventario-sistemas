import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescelComponent } from './detallescel.component';

describe('DetallescelComponent', () => {
  let component: DetallescelComponent;
  let fixture: ComponentFixture<DetallescelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallescelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallescelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
