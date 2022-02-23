import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { map, Observable, Subscription } from 'rxjs';
import { PersonResource } from '../../models';

@Component({
  selector: 'app-google-contacts-control',
  templateUrl: './google-contacts-control.component.html',
  styleUrls: ['./google-contacts-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GoogleContactsControlComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: GoogleContactsControlComponent,
      multi: true,
    },
  ],
})
export class GoogleContactsControlComponent
  implements OnInit, OnDestroy, ControlValueAccessor, Validators
{
  formGroup!: FormGroup;
  onTouched = () => {};

  private valueChanges$!: Observable<PersonResource>;
  private readonly subscriptons: Subscription[] = [];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      givenName: [null, Validators.required],
      familyName: [null, Validators.required],
      phoneNumbers: this.fb.array([]),
      emailAddresses: this.fb.array([]),
    });

    this.valueChanges$ = this.formGroup.valueChanges.pipe(
      map((data) => {
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

    ['givenName', 'familyName', 'phoneNumbers', 'emailAddresses'].forEach(
      (key) => {
        const control = this.formGroup.get(key)!;
        if (control.errors) errors[key] = control.errors;
      },
    );

    return errors;
  }

  fgPhoneNumbers(): FormArray {
    return this.formGroup.get('phoneNumbers') as FormArray;
  }
  fgEmailAddresses(): FormArray {
    return this.formGroup.get('emailAddresses') as FormArray;
  }

  onAddTelephone(event: any): void {
    event.preventDefault();

    this.fgPhoneNumbers().push(this.fb.group({ value: '' }));
  }
  onAddEmail(event: any): void {
    event.preventDefault();

    this.fgEmailAddresses().push(this.fb.group({ value: '' }));
  }

  onDeletePhone(index: number) {
    this.fgPhoneNumbers().removeAt(index);
  }
  onDeleteEmail(index: number) {
    this.fgEmailAddresses().removeAt(index);
  }
}
