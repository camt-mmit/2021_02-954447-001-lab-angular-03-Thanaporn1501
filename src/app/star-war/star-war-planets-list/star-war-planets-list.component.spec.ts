import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPlanetsListComponent } from './star-war-planets-list.component';

describe('StarWarPlanetsListComponent', () => {
  let component: StarWarPlanetsListComponent;
  let fixture: ComponentFixture<StarWarPlanetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPlanetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPlanetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
