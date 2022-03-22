import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarimpComponent } from './editarimp.component';

describe('EditarimpComponent', () => {
  let component: EditarimpComponent;
  let fixture: ComponentFixture<EditarimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
