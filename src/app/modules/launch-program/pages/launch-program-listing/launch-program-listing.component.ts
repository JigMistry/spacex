import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LaunchProgramService } from '../../../../shared/services/launch-program.service';

@Component({
  selector: 'app-launch-program-listing',
  templateUrl: './launch-program-listing.component.html',
  styleUrls: ['./launch-program-listing.component.scss']
})
export class LaunchProgramListingComponent implements OnInit {

  launchPrograms = [];
  isLoading: boolean = false;
  filterSubscription: Subscription;

  constructor(
    private launchProgramService: LaunchProgramService
  ) { 
    this.filterSubscription = this.launchProgramService.getFilterObservable().subscribe(() => {
      const currentFilter = this.launchProgramService.getCurrentFilter();
      this.getAllLaunchPrograms(currentFilter);
    });
  }

  ngOnInit(): void {
    this.getAllLaunchPrograms();
  }

  getAllLaunchPrograms(queryObj?) {
    this.launchPrograms = [];
    this.isLoading = true;
    this.launchProgramService.getLaunchPrograms(queryObj).subscribe(res => {
      this.launchPrograms = res;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
      console.log("err", err);
    });
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
}
