import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LaunchProgramService } from '../../../../shared/services/launch-program.service';

import { Filter } from '../../../../shared/models/filter.model';

@Component({
  selector: 'app-launch-program-filter',
  templateUrl: './launch-program-filter.component.html',
  styleUrls: ['./launch-program-filter.component.scss']
})
export class LaunchProgramFilterComponent implements OnInit {

  launchYears: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  currentFilter: Filter = new Filter();
  filterSubscription: Subscription;

  constructor(
    private launchProgramService: LaunchProgramService
  ) { 
    this.currentFilter = this.launchProgramService.getCurrentFilter();
    this.filterSubscription = this.launchProgramService.getFilterObservable().subscribe(() => {
      this.currentFilter = this.launchProgramService.getCurrentFilter();
    });
  }

  ngOnInit(): void {
  }

  onLaunchYearFilter(year: number): void {
    this.launchProgramService.filterSelect({
      filterName: 'launch_year',
      filterValue: year
    });
  }
  onLaunchSuccessFilter(value: boolean): void {
    this.launchProgramService.filterSelect({
      filterName: 'launch_success',
      filterValue: value
    });
  }
  onLandSuccessFilter(value: boolean): void {
    this.launchProgramService.filterSelect({
      filterName: 'land_success',
      filterValue: value
    });
  }
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
}
