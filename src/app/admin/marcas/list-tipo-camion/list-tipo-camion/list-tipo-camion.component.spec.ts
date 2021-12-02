import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoCamionComponent } from './list-tipo-camion.component';

describe('ListTipoCamionComponent', () => {
  let component: ListTipoCamionComponent;
  let fixture: ComponentFixture<ListTipoCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
