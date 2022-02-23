import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonResource } from '../../models';

@Component({
  selector: 'app-google-contacts-form',
  templateUrl: './google-contacts-form.component.html',
  styleUrls: ['./google-contacts-form.component.scss'],
})
export class GoogleContactsFormComponent implements OnInit {
  @Input() data: PersonResource | null = null;

  @Output() dataChange = new EventEmitter<PersonResource>();
  @Output() cancel = new EventEmitter<void>();

  formGroup!: FormGroup;
  errorMessage: string | null = null;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      personResource: [this.data, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.errorMessage = null;
    if (this.formGroup.invalid) {
      this.errorMessage = 'Invalid form data!!!';
    } else {
      const control = this.formGroup.get('personResource')!;

      this.dataChange.emit(control.value);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
