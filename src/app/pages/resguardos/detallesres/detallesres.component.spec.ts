import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesresComponent } from './detallesres.component';

describe('DetallesresComponent', () => {
  let component: DetallesresComponent;
  let fixture: ComponentFixture<DetallesresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
