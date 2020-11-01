import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  url: string;
}

@Component({
  selector: 'ensino-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit, OnDestroy {
  @Input() router: Router;
  @Input() activatedRoute: ActivatedRoute;

  @Input() root: string | any[] = [];

  sub$: Subscription;

  menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.router && this.activatedRoute) {
      this.menuItems = this.handleBreadCrumbs(this.activatedRoute.root);

      this.sub$ = this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => {
          this.menuItems = this.handleBreadCrumbs(this.activatedRoute.root);
        });
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  public handleBreadCrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot?.data?.breadcrumb;
      if (label) {
        breadcrumbs.push({ label, url });
      }

      return this.handleBreadCrumbs(child, url, breadcrumbs);
    }
  }
}
