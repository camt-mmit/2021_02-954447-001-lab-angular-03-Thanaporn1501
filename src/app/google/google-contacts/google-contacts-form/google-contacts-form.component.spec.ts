import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactsFormComponent } from './google-contacts-form.component';

describe('GoogleContactsFormComponent', () => {
  let component: GoogleContactsFormComponent;
  let fixture: ComponentFixture<GoogleContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
