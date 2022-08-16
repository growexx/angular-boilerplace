import { Location } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { MainComponent } from 'src/app/main/main.component';
import { UsersListComponent } from 'src/app/users/users-list/users-list.component';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let httpTestingController: HttpTestingController;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{
        path: 'admin',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },{
        path: 'admin',
        component: MainComponent,
        data: {
          title: 'Users Management',
        },
        children:[{
          path: 'users/list',
          component: UsersListComponent,
          data:{
            title: 'Users Management',
          }
        }]
      }]),HttpClientTestingModule],
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
    router.initialNavigation();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called constructor and run route', fakeAsync(() => {
    router.navigate(['admin']);
    tick();

    let expectedBreadcrumbs = [{
      label: 'Users Management',
      url: '/admin'
    }]
    
    router.navigate(['admin/users/list']);
    tick();
    
    expect(component.breadcrumbs).toEqual(expectedBreadcrumbs);
  }));
});
