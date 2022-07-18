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
    const event = { target: { files: [file] } };

    spyOn(<any>window, 'FileReader').and.returnValue({
      readAsDataURL: function () { },
      onload: function () { }
    });

    component.fileChangeEvent(event);
    expect(component).toBeTruthy();
  })

  it('should call function removeImage', () => {
    component.removeImage();
  })


});

