import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramListingComponent } from './launch-program-listing.component';

describe('LaunchProgramListingComponent', () => {
  let component: LaunchProgramListingComponent;
  let fixture: ComponentFixture<LaunchProgramListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
