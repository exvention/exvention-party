import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyCardComponent } from './policy-card/policy-card.component';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    PolicyListComponent,
    PolicyCardComponent,
    PolicyDetailComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    FontAwesomeModule
  ]
})
export class PoliciesModule { }
