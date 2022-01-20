import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputContainerComponent } from './example-input-container.component';

describe('ExampleInputContainerComponent', () => {
  let component: ExampleInputContainerComponent;
  let fixture: ComponentFixture<ExampleInputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
