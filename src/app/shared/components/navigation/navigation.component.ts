import { Component, input, output } from '@angular/core';
import { Machine } from '../../../data/machine-state.model';
import { MachinesMapper, MachinesStateViewModel } from '../../../data/machines-state.mapper';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-navigation',
  styleUrl: './navigation.component.scss',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  machines = input.required<Machine[]>();
  download = output<void>();

  machineState(machine: Machine): MachinesStateViewModel {
    return MachinesMapper.mapMachineState(machine.state);
  }

  downloadJson(): void {
    this.download.emit();
  }
}
