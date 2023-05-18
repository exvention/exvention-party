import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpRoutingModule } from './mp-routing.module';
import { PartyListComponent } from './party-list/party-list.component';
import { DistrictComponent } from './district/district.component';


@NgModule({
  declarations: [
    PartyListComponent,
    DistrictComponent
  ],
  imports: [
    CommonModule,
    MpRoutingModule
  ]
})
export class MpModule { }
