import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVersionesComponent } from './list-versiones.component';

describe('ListVersionesComponent', () => {
  let component: ListVersionesComponent;
  let fixture: ComponentFixture<ListVersionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVersionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
