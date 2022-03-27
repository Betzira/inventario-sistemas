import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarresComponent } from './editarres.component';

describe('EditarresComponent', () => {
  let component: EditarresComponent;
  let fixture: ComponentFixture<EditarresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
