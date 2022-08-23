import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { DummyDataService } from 'src/app/core/services/dummy-data.service';

import { CommentsComponent } from './comments.component';

export class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let httpTestingController: HttpTestingController;
  let dummyDataSpy:DummyDataService;
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  beforeEach(async () => {
    dummyDataSpy = jasmine.createSpyObj('DummyDataService',['getAllComments','addComment','deleteComment','editComment'])
     await TestBed.configureTestingModule({
      declarations: [ CommentsComponent ],
      imports: [HttpClientTestingModule, BrowserAnimationsModule,
        HttpClientModule,],
      providers:[CommentsComponent,
      {provide: MatDialog, useClass: MatDialogMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
