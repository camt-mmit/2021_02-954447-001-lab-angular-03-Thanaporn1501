import { Component, OnInit } from '@angular/core';
import { ExampleDataService, ExampleSection } from '../example-data.service';

@Component({
  selector: 'app-example-display-page',
  templateUrl: './example-display-page.component.html',
  styleUrls: ['./example-display-page.component.scss']
})
export class ExampleDisplayPageComponent implements OnInit {

  constructor(public readonly dataService: ExampleDataService) { }

  display(items: ExampleSection): number {
    return items.reduce((carry,item) => carry + item.value, 0)
  }
  ngOnInit(): void {
    return;
  }
}
