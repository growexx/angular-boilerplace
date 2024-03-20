import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbsSubject = new BehaviorSubject<string[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.generateBreadcrumbs(this.router.routerState.snapshot.root);
      }
    });
  }

  private generateBreadcrumbs(route: ActivatedRouteSnapshot): void {
    const breadcrumbs: string[] = [];
    let currentRoute = route;
    while (currentRoute) {
      const routeLabel = this.getLabel(currentRoute);
      if (routeLabel) {
        breadcrumbs.unshift(routeLabel);
      }
      currentRoute = currentRoute.parent!;
    }
    this.breadcrumbsSubject.next(breadcrumbs);
  }

  private getLabel(route: ActivatedRouteSnapshot): string | null {
    const routeData = route.data;
    return routeData && routeData['title'] ? routeData['title'] : null;
  }
}
