import { Component, inject, signal } from '@angular/core';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { MachineLinePageComponent } from './pages/machine-line-page/machine-line-page.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { MachinesStateStore } from './data/machines-state.store';
import { downloadJson } from './shared/utils/utils';

@Component({
  imports: [ ToolbarComponent, MachineLinePageComponent, NavigationComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly machinesStore = inject(MachinesStateStore);
  machines = this.machinesStore.machines;

  ngOnInit(): void {
    this.machinesStore.loadMachineState();
  }

  download() {
    downloadJson(this.machinesStore.machineState(), 'machines.json');
  }
}
