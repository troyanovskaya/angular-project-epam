import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOfButtonsComponent } from './line-of-buttons.component';

describe('LineOfButtonsComponent', () => {
  let component: LineOfButtonsComponent;
  let fixture: ComponentFixture<LineOfButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineOfButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineOfButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
