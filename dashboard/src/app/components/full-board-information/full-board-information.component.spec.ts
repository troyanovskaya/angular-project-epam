import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBoardInformationComponent } from './full-board-information.component';

describe('FullBoardInformationComponent', () => {
  let component: FullBoardInformationComponent;
  let fixture: ComponentFixture<FullBoardInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBoardInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullBoardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
