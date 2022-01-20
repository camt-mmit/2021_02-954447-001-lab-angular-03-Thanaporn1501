import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExampleDataService } from '../example-data.service';

@Component({
  selector: 'app-example-display-section-page',
  templateUrl: './example-display-section-page.component.html',
  styleUrls: ['./example-display-section-page.component.scss'],
})
export class ExampleDisplaySectionPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public readonly dataService: ExampleDataService,
  ) {}

  ngOnInit(): void {
    return;
  }
  getSectionIndex(): number {
    return parseInt(
    this.activatedRoute.snapshot.paramMap.get('sectionIndex') || '0',
    );
  }
  getItems() {
    return this.dataService.getData()[this.getSectionIndex()];
  }
}
