import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesantComponent } from './detallesant.component';

describe('DetallesantComponent', () => {
  let component: DetallesantComponent;
  let fixture: ComponentFixture<DetallesantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
