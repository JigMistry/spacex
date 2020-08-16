import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LaunchProgramComponent } from './launch-program.component';
import { LaunchProgramListingComponent } from './pages/launch-program-listing/launch-program-listing.component';

// Modules
import { LaunchProgramRoutingModule } from './launch-program-routing.module';
import { LaunchProgramCardComponent } from './components/launch-program-card/launch-program-card.component';
import { LaunchProgramFilterComponent } from './components/launch-program-filter/launch-program-filter.component';



@NgModule({
  declarations: [
    LaunchProgramComponent,
    LaunchProgramListingComponent,
    LaunchProgramCardComponent,
    LaunchProgramFilterComponent
  ],
  imports: [
    CommonModule,
    LaunchProgramRoutingModule
  ],
  exports: [
    LaunchProgramComponent
  ],
})
export class LaunchProgramModule { }
