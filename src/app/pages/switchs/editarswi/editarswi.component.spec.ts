import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarswiComponent } from './editarswi.component';

describe('EditarswiComponent', () => {
  let component: EditarswiComponent;
  let fixture: ComponentFixture<EditarswiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarswiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarswiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
