import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPromocionComponent } from './nueva-promocion.component';

describe('NuevaPromocionComponent', () => {
  let component: NuevaPromocionComponent;
  let fixture: ComponentFixture<NuevaPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
