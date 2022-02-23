import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactsControlComponent } from './google-contacts-control.component';

describe('GoogleContactsControlComponent', () => {
  let component: GoogleContactsControlComponent;
  let fixture: ComponentFixture<GoogleContactsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactsControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
