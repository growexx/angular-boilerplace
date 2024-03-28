import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BreadcrumbsService } from '../core/services/breadcrumbs.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsResolver implements Resolve<string[]> {
  constructor(private breadcrumbsService: BreadcrumbsService) {}

  resolve(): string[] {
    let breadcrumbs: string[] = [];

    this.breadcrumbsService.breadcrumbs$.pipe(take(1)).subscribe(
      value => breadcrumbs = value,
      error => console.error(error)
    );

    return breadcrumbs;
  }
}
