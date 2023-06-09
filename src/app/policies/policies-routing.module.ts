import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PolicyListComponent} from "./policy-list/policy-list.component";

const routes: Routes = [
  {
    path: '',
    component: PolicyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
