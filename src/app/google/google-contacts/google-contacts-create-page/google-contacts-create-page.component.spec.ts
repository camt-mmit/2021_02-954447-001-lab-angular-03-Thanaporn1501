import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactsCreatePageComponent } from './google-contacts-create-page.component';

describe('GoogleContactsCreatePageComponent', () => {
  let component: GoogleContactsCreatePageComponent;
  let fixture: ComponentFixture<GoogleContactsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactsCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
