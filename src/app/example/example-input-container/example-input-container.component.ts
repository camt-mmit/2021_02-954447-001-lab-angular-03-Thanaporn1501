import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-example-input-container',
  templateUrl: './example-input-container.component.html',
  styleUrls: ['./example-input-container.component.scss']
})
export class ExampleInputContainerComponent implements OnInit {
  @Input() value:number | null = null;   //or value! ไม่ต้อง = null
  @Output() update = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
    return;
  }

  onUpdate(value: number): void{
    this.update.emit(value);
  }
}
