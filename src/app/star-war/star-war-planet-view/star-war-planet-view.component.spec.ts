import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPlanetViewComponent } from './star-war-planet-view.component';

describe('StarWarPlanetViewComponent', () => {
  let component: StarWarPlanetViewComponent;
  let fixture: ComponentFixture<StarWarPlanetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPlanetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPlanetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
