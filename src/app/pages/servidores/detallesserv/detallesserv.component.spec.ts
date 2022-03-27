import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesservComponent } from './detallesserv.component';

describe('DetallesservComponent', () => {
  let component: DetallesservComponent;
  let fixture: ComponentFixture<DetallesservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
