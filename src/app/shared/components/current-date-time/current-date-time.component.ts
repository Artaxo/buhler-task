import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { createMinuteClock } from '../../utils/time.utils';

@Component({
  imports: [DatePipe],
  selector: 'app-current-date-time',
  styleUrl: './current-date-time.component.scss',
  templateUrl: './current-date-time.component.html',
})
export class CurrentDateTimeComponent {
  readonly time = toSignal(createMinuteClock(), {
    initialValue: new Date(),
  });
}
