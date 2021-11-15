import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVersionesComponent } from './new-versiones.component';

describe('NewVersionesComponent', () => {
  let component: NewVersionesComponent;
  let fixture: ComponentFixture<NewVersionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVersionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
