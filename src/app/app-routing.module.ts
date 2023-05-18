import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateComponent} from "./template/template.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'policies',
        loadChildren: () => import('./policies/policies.module').then(m => m.PoliciesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
