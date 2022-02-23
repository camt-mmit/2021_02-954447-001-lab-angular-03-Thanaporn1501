import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPlanetViewPageComponent } from './star-war-planet-view-page.component';

describe('StarWarPlanetViewPageComponent', () => {
  let component: StarWarPlanetViewPageComponent;
  let fixture: ComponentFixture<StarWarPlanetViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPlanetViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPlanetViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
