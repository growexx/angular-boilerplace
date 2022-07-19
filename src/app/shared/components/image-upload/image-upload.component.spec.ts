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
    const file = new File([''], 'boiler.jpg', { type: 'text/html' });
    const event = {
      target: {
        files: [{
          size: '28841',
          type: "image/jpeg",
        }]
      }
    };

    var image =  new Image();
    image.src = "base/test/img/canvas.png"

    spyOn(<any>window, 'FileReader').and.returnValue({
      readAsDataURL: function () { },
      onload: function () { 
      }
    });


    component.fileChangeEvent(event);
    expect(component.fileChangeEvent).toBeTruthy();
  })

  it('should call function removeImage', () => {
    component.removeImage();
  })


});

