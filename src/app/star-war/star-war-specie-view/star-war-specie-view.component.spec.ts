import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSpecieViewComponent } from './star-war-specie-view.component';

describe('StarWarSpecieViewComponent', () => {
  let component: StarWarSpecieViewComponent;
  let fixture: ComponentFixture<StarWarSpecieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarSpecieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarSpecieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
