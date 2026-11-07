import { Injectable, inject, signal, computed } from '@angular/core';
import { MachinesStateService } from './machines-state.service';
import { MachinesState } from './machine-state.model';

@Injectable({
  providedIn: 'root',
})
export class MachinesStateStore {
  private readonly machineStateService = inject(MachinesStateService);

  private readonly _machineState = signal<MachinesState | null>(null);

  readonly machineState = this._machineState.asReadonly();

  readonly machines = computed(() => this._machineState()?.machines ?? []);

  loadMachineState(): void {
    this.machineStateService.getMachinesData().subscribe({
      next: (state) => this._machineState.set(state),
      error: (error) => console.error(error),
    });
  }
}
