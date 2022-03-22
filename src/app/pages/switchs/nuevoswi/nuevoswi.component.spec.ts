import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoswiComponent } from './nuevoswi.component';

describe('NuevoswiComponent', () => {
  let component: NuevoswiComponent;
  let fixture: ComponentFixture<NuevoswiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoswiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoswiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
