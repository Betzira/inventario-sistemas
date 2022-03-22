import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoimpComponent } from './nuevoimp.component';

describe('NuevoimpComponent', () => {
  let component: NuevoimpComponent;
  let fixture: ComponentFixture<NuevoimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
