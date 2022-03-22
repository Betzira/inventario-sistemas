import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaswiComponent } from './listaswi.component';

describe('ListaswiComponent', () => {
  let component: ListaswiComponent;
  let fixture: ComponentFixture<ListaswiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaswiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaswiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
