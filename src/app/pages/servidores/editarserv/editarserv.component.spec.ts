import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarservComponent } from './editarserv.component';

describe('EditarservComponent', () => {
  let component: EditarservComponent;
  let fixture: ComponentFixture<EditarservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
