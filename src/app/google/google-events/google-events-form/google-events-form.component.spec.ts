import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleEventsFormComponent } from './google-events-form.component';

describe('GoogleEventsFormComponent', () => {
  let component: GoogleEventsFormComponent;
  let fixture: ComponentFixture<GoogleEventsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleEventsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
