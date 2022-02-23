import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPeopleListComponent } from './star-war-people-list.component';

describe('StarWarPeopleListComponent', () => {
  let component: StarWarPeopleListComponent;
  let fixture: ComponentFixture<StarWarPeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPeopleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
