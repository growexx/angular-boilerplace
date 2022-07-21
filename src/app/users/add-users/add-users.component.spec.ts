import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, flush, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AddUsersComponent } from './add-users.component';

describe('AddUsersComponent', () => {
  let component: AddUsersComponent;
  let fixture: ComponentFixture<AddUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersComponent ],
      providers: [
        { provide: FormBuilder },
      ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to function goToStep2',()=>{
    component.goToStep2();
    component.getAllControls();
    component.goToStep3();
    component.addUser();
    const address:any = [];
    const index:number = 0;
    component.countrySelectionChange(address,index);
    component.setSelectedAddress(address,index)
    component.secondFormGroup.controls['addressLine1']?.setValue((address['street_number']))
    expect(component.firstFormGroup.valid).toBeTruthy()
  })
});
