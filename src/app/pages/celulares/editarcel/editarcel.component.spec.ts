import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcelComponent } from './editarcel.component';

describe('EditarcelComponent', () => {
  let component: EditarcelComponent;
  let fixture: ComponentFixture<EditarcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
