import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ImageUploadComponent } from './image-upload.component';

describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;
  let event = {
    target: {
      files: [{
        size: '28841',
        type: "image/jpeg",
        name: "abc.jpg"
      }]
    }
  };

  const compSpy = jasmine.createSpyObj('component', ['fileChangeEvent', 'removeImage'])
  compSpy.fileChangeEvent.and.returnValue(of(event))

  const mockReader: FileReader = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onload']);

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
    const mockFile = new File([''], 'abc.jpg', { type: 'text/html' });
    const mockEvt = { target: { files: [mockFile] } };
    const reader = new FileReader();
    component.fileChangeEvent(mockEvt);
    expect(component).toBeTruthy();
  })

  it('should call onFileInput function and test invalid file size', () => {
    const mockFile = new File([''], 'abc.jpg', { type: 'text/html' });
    Object.defineProperty(
      mockFile, 'size', { value: Math.pow(1024, 4), writable: true });
    const mockEvt = { target: { files: [mockFile] } };
    component.fileChangeEvent(mockEvt);
    expect(component).toBeTruthy();
  });


  it('should call function removeImage', () => {
    component.removeImage();
    expect(component).toBeTruthy()
  });

});

