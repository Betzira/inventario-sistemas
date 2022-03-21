import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocelComponent } from './nuevocel.component';

describe('NuevocelComponent', () => {
  let component: NuevocelComponent;
  let fixture: ComponentFixture<NuevocelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevocelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevocelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
