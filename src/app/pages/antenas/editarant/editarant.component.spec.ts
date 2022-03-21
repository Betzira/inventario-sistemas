import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarantComponent } from './editarant.component';

describe('EditarantComponent', () => {
  let component: EditarantComponent;
  let fixture: ComponentFixture<EditarantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
