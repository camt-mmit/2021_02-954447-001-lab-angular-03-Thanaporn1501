import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

export type SimpleFormData = {
  name?: string;
  age?: number;
  gender?: 'male' | 'female';
  address?: string;
  slibings?: string[];
};

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent implements OnInit {
  @Input() data!: SimpleFormData;

  @Output() update = new EventEmitter<SimpleFormData>();
  formGroup!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    console.debug(this.data);
    this.formGroup = this.fb.group({
      name: [this.data.name || null],
      age: [this.data.age || null],
      gender: [this.data.gender || null],
      address: [this.data.address || null],
      slibings: this.fb.array(
        (this.data.slibings || []).map((value)=> this.fb.control([value])),
      ),
    });
    this.formGroup.valueChanges.pipe(
      debounceTime(1000),
    ).subscribe((data)=> this.update.emit(data))
  }
  get slibings(): FormArray {
    return this.formGroup.get('slibings') as FormArray;
  }
  addSlibing():void {
    this.slibings.push(this.fb.control(null));
  }
  deleteSlibing(index: number):void {
    this.slibings.removeAt(index);
  }
}
