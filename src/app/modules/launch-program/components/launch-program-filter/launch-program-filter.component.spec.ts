import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramFilterComponent } from './launch-program-filter.component';

describe('LaunchProgramFilterComponent', () => {
  let component: LaunchProgramFilterComponent;
  let fixture: ComponentFixture<LaunchProgramFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
