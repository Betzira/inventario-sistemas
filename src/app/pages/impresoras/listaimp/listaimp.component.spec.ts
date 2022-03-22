import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaimpComponent } from './listaimp.component';

describe('ListaimpComponent', () => {
  let component: ListaimpComponent;
  let fixture: ComponentFixture<ListaimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
