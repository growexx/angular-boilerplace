import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { ThemeButtonComponent } from './theme-button.component';
import { Option } from 'src/app/core/interface/option.model';

describe('ThemeButtonComponent', () => {
  let component: ThemeButtonComponent;
  let fixture: ComponentFixture<ThemeButtonComponent>;
  let options: Option;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeButtonComponent ],
      imports: [HttpClientTestingModule, MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changTheme', () =>{
    component.changeTheme(options)
  })
});
