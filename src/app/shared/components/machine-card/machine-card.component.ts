import { Component, input } from '@angular/core';
import { Machine } from '../../../data/machine-state.model';
import { MachinesMapper, MachinesStateViewModel } from '../../../data/machines-state.mapper';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-machine-card',
  styleUrl: './machine-card.component.scss',
  templateUrl: './machine-card.component.html',
})
export class MachineCardComponent {
  machine = input.required<Machine>();

  get machineState(): MachinesStateViewModel {
    return MachinesMapper.mapMachineState(this.machine().state);
  }

  get machineIcon(): string {
    return MachinesMapper.mapMachineIcon(this.machine().type);
  }
}
