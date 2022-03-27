import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoresComponent } from './nuevores.component';

describe('NuevoresComponent', () => {
  let component: NuevoresComponent;
  let fixture: ComponentFixture<NuevoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
