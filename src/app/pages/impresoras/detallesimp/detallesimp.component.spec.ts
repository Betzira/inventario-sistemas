import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesimpComponent } from './detallesimp.component';

describe('DetallesimpComponent', () => {
  let component: DetallesimpComponent;
  let fixture: ComponentFixture<DetallesimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
