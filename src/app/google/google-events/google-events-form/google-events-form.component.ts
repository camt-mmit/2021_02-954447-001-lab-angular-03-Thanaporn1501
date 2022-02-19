import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventResource } from '../../models';

@Component({
  selector: 'app-google-events-form',
  templateUrl: './google-events-form.component.html',
  styleUrls: ['./google-events-form.component.scss'],
})
export class GoogleEventsFormComponent implements OnInit {
  @Input() data: EventResource | null = null;

  @Output() dataChange = new EventEmitter<EventResource>();
  @Output() cancel = new EventEmitter<void>();

  formGroup!: FormGroup;
  errorMessage: string | null = null;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      eventResource: [this.data, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.errorMessage = null;
    if (this.formGroup.invalid) {
      this.errorMessage = 'Invalid form data!!!';
    } else {
      const control = this.formGroup.get('eventResource')!;
      this.dataChange.emit(control.value);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
