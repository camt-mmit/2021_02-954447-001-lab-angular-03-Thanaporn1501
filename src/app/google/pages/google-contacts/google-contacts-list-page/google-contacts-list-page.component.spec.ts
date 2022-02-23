import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactsListPageComponent } from './google-contacts-list-page.component';

describe('GoogleContactsListPageComponent', () => {
  let component: GoogleContactsListPageComponent;
  let fixture: ComponentFixture<GoogleContactsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
