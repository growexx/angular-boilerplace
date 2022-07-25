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
      }]
    }
  };
  
const compSpy =   jasmine.createSpyObj('component',['fileChangeEvent','removeImage'])
compSpy.fileChangeEvent.and.returnValue(of(event))

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
    const mockFile = new File([''], 'parkstreet.jpg', { type: 'text/html' });
    const mockEvt = { target: { files: [mockFile], result:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA" } };
    component.fileChangeEvent(mockEvt);
    expect(component).toBeTruthy();
  })

  it('should call function removeImage', () => {
    component.removeImage();
    expect(component).toBeTruthy()
  });



  
});

