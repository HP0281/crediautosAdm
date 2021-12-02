import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlMarcasMotosComponent } from './listl-marcas-motos.component';

describe('ListlMarcasMotosComponent', () => {
  let component: ListlMarcasMotosComponent;
  let fixture: ComponentFixture<ListlMarcasMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlMarcasMotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlMarcasMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
