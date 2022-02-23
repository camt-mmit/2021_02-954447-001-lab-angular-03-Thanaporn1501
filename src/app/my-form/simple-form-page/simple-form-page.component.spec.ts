import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormPageComponent } from './simple-form-page.component';

describe('SimpleFormPageComponent', () => {
  let component: SimpleFormPageComponent;
  let fixture: ComponentFixture<SimpleFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
