import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  breadcrumbs: { label: string, url?: string }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.createBreadcrumbs(this.activatedRoute.root))
    ).subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: { label: string, url?: string }[] = []): { label: string, url?: string }[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: (child.snapshot.data as any)['title'], url: url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
