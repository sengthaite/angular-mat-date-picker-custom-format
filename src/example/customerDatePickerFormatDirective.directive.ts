import { Directive } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Directive({
  selector: '[appCustomPickerFormats]',
  standalone: true,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
          parse: {
            dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
          },
          display: {
            dateInput: 'DD', // this is how your date will get displayed on the Input
            monthYearLabel: 'MMMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
          },
      }
    }
  ]
})
export class CustomPickerFormatsDirective {
  constructor() {
    console.log("Directive works")
  }
}
