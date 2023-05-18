import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exvention-party';

  currentPage: string = ''
  private currentLocation: string = '';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.currentLocation = this.location.path()
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentLocation = e.url
      }
    });
  }

  isActive(s: any): boolean {
    return this.currentLocation == s;
  }

}
