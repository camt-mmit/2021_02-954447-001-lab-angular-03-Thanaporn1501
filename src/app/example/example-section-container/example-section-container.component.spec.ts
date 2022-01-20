import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSectionContainerComponent } from './example-section-container.component';

describe('ExampleSectionContainerComponent', () => {
  let component: ExampleSectionContainerComponent;
  let fixture: ComponentFixture<ExampleSectionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleSectionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
