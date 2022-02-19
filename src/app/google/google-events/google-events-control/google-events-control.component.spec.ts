import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleEventsControlComponent } from './google-events-control.component';

describe('GoogleEventsControlComponent', () => {
  let component: GoogleEventsControlComponent;
  let fixture: ComponentFixture<GoogleEventsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleEventsControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleEventsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
