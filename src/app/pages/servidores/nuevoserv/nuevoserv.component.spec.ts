import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoservComponent } from './nuevoserv.component';

describe('NuevoservComponent', () => {
  let component: NuevoservComponent;
  let fixture: ComponentFixture<NuevoservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
