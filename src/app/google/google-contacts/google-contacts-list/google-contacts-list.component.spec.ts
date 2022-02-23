import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactsListComponent } from './google-contacts-list.component';

describe('GoogleContactsListComponent', () => {
  let component: GoogleContactsListComponent;
  let fixture: ComponentFixture<GoogleContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
