import { Component, input} from '@angular/core';
import { MachineCardComponent } from '../../shared/components/machine-card/machine-card.component';
import { Machine } from '../../data/machine-state.model';

@Component({
  imports: [MachineCardComponent],
  selector: 'app-machine-line-page',
  styleUrl: './machine-line-page.component.scss',
  templateUrl: './machine-line-page.component.html',
})
export class MachineLinePageComponent {
  machines = input.required<Machine[]>();
}
