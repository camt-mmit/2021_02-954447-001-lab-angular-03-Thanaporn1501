import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-example-section-container',
  templateUrl: './example-section-container.component.html',
  styleUrls: ['./example-section-container.component.scss'],
})
export class ExampleSectionContainerComponent implements OnInit {
  @Input() items: { value: number }[] | null = null;

  @Output() update = new EventEmitter<{index: number, value: number}>();
  @Output() add = new EventEmitter<any>();
  @Output() dalete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    return;
  }

  onUpdate(index: number, value: number): void {
    this.update.emit({index: index, value: value});
  }

  onAdd(): void {
    this.add.emit(null);
  }

  onDelete(index: number) {
    this.dalete.emit(index);
  }
}
