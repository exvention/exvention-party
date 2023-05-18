import {Component, OnInit} from '@angular/core';
import {PoliciesService} from "../policies.service";

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent implements OnInit{
  policies: any[] = [];

  filteredPolicies: any[] = [];
  constructor(private policiesService: PoliciesService) {
  }

  ngOnInit(): void {
    this.policiesService.list().subscribe(policies => {
      this.policies = this.filteredPolicies = policies
    })
  }

  search(e: any) {
    this.filteredPolicies = this.policies.filter(policy => policy.title.includes(e.target.value))
  }

}
