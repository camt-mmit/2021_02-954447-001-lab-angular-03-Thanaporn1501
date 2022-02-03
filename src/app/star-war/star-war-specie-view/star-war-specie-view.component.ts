import { Component,Input, OnInit } from '@angular/core';
import { Specie } from '../models';

@Component({
  selector: 'app-star-war-specie-view',
  templateUrl: './star-war-specie-view.component.html',
  styleUrls: ['./star-war-specie-view.component.scss']
})
export class StarWarSpecieViewComponent implements OnInit {
  @Input() data : Specie | null = null;
  constructor() { }

  ngOnInit(): void {
    return;
  }

}
