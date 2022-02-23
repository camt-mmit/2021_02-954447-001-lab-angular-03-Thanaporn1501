import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPersonViewPageComponent } from './star-war-person-view-page.component';

describe('StarWarPersonViewPageComponent', () => {
  let component: StarWarPersonViewPageComponent;
  let fixture: ComponentFixture<StarWarPersonViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPersonViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPersonViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
