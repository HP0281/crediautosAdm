import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarcasComponent } from './list-marcas.component';

describe('ListMarcasComponent', () => {
  let component: ListMarcasComponent;
  let fixture: ComponentFixture<ListMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
