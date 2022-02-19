import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { map, Observable, Subscription } from 'rxjs';
import { EventResource } from '../../models';

@Component({
  selector: 'app-google-events-control',
  templateUrl: './google-events-control.component.html',
  styleUrls: ['./google-events-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GoogleEventsControlComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: GoogleEventsControlComponent,
      multi: true,
    },
  ],
})
export class GoogleEventsControlComponent
  implements OnInit, OnDestroy, ControlValueAccessor, Validators
{
  formGroup!: FormGroup;
  onTouched = () => {};

  private valueChanges$!: Observable<EventResource>;
  private readonly subscriptons: Subscription[] = [];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      summary: [null, [Validators.required]],
      start: this.fb.group({
        dateTime: [null, [Validators.required]],
      }),
      end: this.fb.group({
        dateTime: [null, [Validators.required]],
      }),
    });

    this.valueChanges$ = this.formGroup.valueChanges.pipe(
      map((data) => {
        if (data.start?.dateTime) {
          data.start.dateTime = new Date(data.start.dateTime).toISOString();
        }
        if (data.end?.dateTime) {
          data.end.dateTime = new Date(data.end.dateTime).toISOString();
        }
        return data;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptons.forEach((sub) => sub.unsubscribe());
  }

  writeValue(value: any): void {
    if (value) {
      this.formGroup.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(onChange: any): void {
    const sub = this.valueChanges$.subscribe(onChange);
    this.subscriptons.push(sub);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  validate(parentControl: AbstractControl): ValidationErrors | null {
    if (!this.formGroup.invalid) {
      return null;
    }

    let errors: ValidationErrors = { ...this.formGroup.errors };
    ['summary', 'start.dateTime', 'end.dateTime'].forEach((key) => {
      const control = this.formGroup.get(key)!;
      if (control.errors) errors[key] = control.errors;
    });

    return errors;
  }
}
