import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// Modules
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LaunchProgramRoutingModule } from './launch-program-routing.module';

// Components
import { LaunchProgramCardComponent } from './components/launch-program-card/launch-program-card.component';
import { LaunchProgramFilterComponent } from './components/launch-program-filter/launch-program-filter.component';
import { LaunchProgramComponent } from './launch-program.component';
import { LaunchProgramListingComponent } from './pages/launch-program-listing/launch-program-listing.component';



@NgModule({
  declarations: [
    LaunchProgramComponent,
    LaunchProgramListingComponent,
    LaunchProgramCardComponent,
    LaunchProgramFilterComponent
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    LaunchProgramRoutingModule
  ],
  exports: [
    LaunchProgramComponent
  ],
})
export class LaunchProgramModule { }
