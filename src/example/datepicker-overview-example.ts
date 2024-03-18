import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {
  FormBuilder,
  ReactiveFormsModule,
  UntypedFormControl
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Moment } from 'moment';
import { CustomPickerFormatsDirective } from './customerDatePickerFormatDirective.directive';
import { DatepickerComponent, FormOptions } from './datepicker.component';

/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    DatepickerComponent,
    CustomPickerFormatsDirective
  ]
})
export class DatepickerOverviewExample {
  myForm = this.formBuilder.group({
    date: new UntypedFormControl(),
  });
  currentDate?: string;
  formOptions: FormOptions = {
    formGroup: this.myForm,
    formControlName: 'date'
  }
  constructor(private formBuilder: FormBuilder) {
  }
  submit() {
    let submitDate: Moment = this.myForm.value.date as Moment;
    this.currentDate = submitDate.format('YYYY-MM-DD');
    console.log(submitDate.toDate())
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
