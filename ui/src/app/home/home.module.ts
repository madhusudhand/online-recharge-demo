import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LandingComponent]
})
export class HomeModule { }
