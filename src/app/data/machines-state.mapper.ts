import { MachineStateEnum } from './enums/machine-state.enum';
import { MachineTypeEnum } from './enums/machine-type.enum';

export interface MachinesStateViewModel {
  icon: string;
  cssClass: string;
}

export class MachinesMapper {
  private static readonly MACHINE_STATE_CONFIG: Record<MachineStateEnum, MachinesStateViewModel> = {
    [MachineStateEnum.RUNNING]: {
      icon: 'settings_backup_restore',
      cssClass: 'running',
    },

    [MachineStateEnum.ALARM]: {
      icon: 'info',
      cssClass: 'alarm',
    },

    [MachineStateEnum.WARNING]: {
      icon: 'warning',
      cssClass: 'warning',
    },
  };

  private static MACHINE_ICON_CONFIG: Record<MachineTypeEnum, string> = {
    [MachineTypeEnum.SCALE]: 'move_to_inbox',
    [MachineTypeEnum.ATTACHER]: 'chrome_reader_mode',
    [MachineTypeEnum.PACKER]: 'toast',
    [MachineTypeEnum.CLOSER]: 'grid_on',
  };

  static mapMachineState(status: MachineStateEnum): MachinesStateViewModel {
    return this.MACHINE_STATE_CONFIG[status];
  }

  static mapMachineIcon(type: MachineTypeEnum): string {
    return this.MACHINE_ICON_CONFIG[type];
  }
}
