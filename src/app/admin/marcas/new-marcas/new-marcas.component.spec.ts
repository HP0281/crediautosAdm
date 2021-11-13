import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMarcasComponent } from './new-marcas.component';

describe('NewMarcasComponent', () => {
  let component: NewMarcasComponent;
  let fixture: ComponentFixture<NewMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
