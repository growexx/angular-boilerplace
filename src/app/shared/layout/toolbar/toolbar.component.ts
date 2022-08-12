import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot, Data } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public readonly _breadcrumbs$ = new BehaviorSubject<IBreadCrumb[]>([]); 
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable(); 
  breadcrumbs: any = [];

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(event => { 
      this.breadcrumbs = [];
      const root = this.router.routerState.snapshot.root;
      console.log(root);
      this.addBreadcrumb(root, [], this.breadcrumbs);
      this._breadcrumbs$.next(this.breadcrumbs);
    });
  }
  public addBreadcrumb(route: ActivatedRouteSnapshot | null, parentUrl: string[], breadcrumbs: IBreadCrumb[]) {
    if (route) { 
      const routeUrl = parentUrl.concat(route.url.map(url => url.path)); 
      if (route.data['title']) {
        if(!this.breadcrumbs.some((el:any) => {return el.label === route.data['title'];})){
          const breadcrumb = { 
            label: this.getLabel(route.data), 
            url: '/' + routeUrl.join('/') 
          };
          this.breadcrumbs.push(breadcrumb);
        }
      }
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs); 
    } 
  } 
  public getLabel(data: Data) { 
    return typeof data['title'] === 'function' ? data['title'](data) : data['title']; 
  }
}
