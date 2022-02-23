import { Component, Input,OnInit } from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'app-star-war-person-view',
  templateUrl: './star-war-person-view.component.html',
  styleUrls: ['./star-war-person-view.component.scss']
})
export class StarWarPersonViewComponent implements OnInit {
  @Input() data : Person | null = null;
  constructor() { }

  ngOnInit(): void {
    return;
  }

}
