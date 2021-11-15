import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModelosComponent } from './new-modelos.component';

describe('NewModelosComponent', () => {
  let component: NewModelosComponent;
  let fixture: ComponentFixture<NewModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewModelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
