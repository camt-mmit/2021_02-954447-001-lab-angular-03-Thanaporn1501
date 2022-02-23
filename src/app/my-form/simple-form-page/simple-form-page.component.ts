import { Component, OnInit } from '@angular/core';
import { SimpleFormDataService } from '../simple-form-data.service';
import { SimpleFormData } from '../simple-form/simple-form.component';

@Component({
  selector: 'app-simple-form-page',
  templateUrl: './simple-form-page.component.html',
  styleUrls: ['./simple-form-page.component.scss'],
})
export class SimpleFormPageComponent implements OnInit {
  data: SimpleFormData = {};

  constructor(public dataService: SimpleFormDataService) {}

  ngOnInit(): void {
    return;
  }
}
