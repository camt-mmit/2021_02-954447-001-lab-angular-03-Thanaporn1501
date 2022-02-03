import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPersonViewComponent } from './star-war-person-view.component';

describe('StarWarPersonViewComponent', () => {
  let component: StarWarPersonViewComponent;
  let fixture: ComponentFixture<StarWarPersonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPersonViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPersonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
