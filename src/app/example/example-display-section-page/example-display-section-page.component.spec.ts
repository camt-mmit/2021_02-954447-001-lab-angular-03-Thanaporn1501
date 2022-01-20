import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDisplaySectionPageComponent } from './example-display-section-page.component';

describe('ExampleDisplaySectionPageComponent', () => {
  let component: ExampleDisplaySectionPageComponent;
  let fixture: ComponentFixture<ExampleDisplaySectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDisplaySectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDisplaySectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
