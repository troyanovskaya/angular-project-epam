import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOfBoardsComponent } from './line-of-boards.component';

describe('LineOfBoardsComponent', () => {
  let component: LineOfBoardsComponent;
  let fixture: ComponentFixture<LineOfBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineOfBoardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineOfBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
