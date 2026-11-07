import { Component } from '@angular/core';
import { CurrentDateTimeComponent } from '../current-date-time/current-date-time.component';

@Component({
  imports: [CurrentDateTimeComponent],
  selector: 'app-toolbar',
  styleUrl: './toolbar.component.scss',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {}
