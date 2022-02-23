import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSpecieViewPageComponent } from './star-war-specie-view-page.component';

describe('StarWarSpecieViewPageComponent', () => {
  let component: StarWarSpecieViewPageComponent;
  let fixture: ComponentFixture<StarWarSpecieViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarSpecieViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarSpecieViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
