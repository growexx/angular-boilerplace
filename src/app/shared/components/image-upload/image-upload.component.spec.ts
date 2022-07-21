import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageUploadComponent } from './image-upload.component';

describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageUploadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call function fileChangeEvent', () => {
    const event = {
      target: {
        files: [{
          size: '28841',
          type: "image/jpeg",
        }]
      }
    };
    

    spyOn(<any>window, 'FileReader').and.returnValue({
      readAsDataURL: function () { },
      onload: function (e:any) {
      }
    });


    component.fileChangeEvent(event).toBeTruthy();
    // expect(component.fileChangeEvent).toBeTruthy();
  })

  it('should call function removeImage', () => {
    component.removeImage();
  })


});

