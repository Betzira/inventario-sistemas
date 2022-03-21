import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoantComponent } from './nuevoant.component';

describe('NuevoantComponent', () => {
  let component: NuevoantComponent;
  let fixture: ComponentFixture<NuevoantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
