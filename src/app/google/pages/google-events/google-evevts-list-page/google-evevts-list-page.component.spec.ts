import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleEvevtsListPageComponent } from './google-evevts-list-page.component';

describe('GoogleEvevtsListPageComponent', () => {
  let component: GoogleEvevtsListPageComponent;
  let fixture: ComponentFixture<GoogleEvevtsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleEvevtsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleEvevtsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
