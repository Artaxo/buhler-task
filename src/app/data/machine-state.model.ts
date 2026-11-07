import { MachineStateEnum } from './enums/machine-state.enum';
import { MachineTypeEnum } from './enums/machine-type.enum';

export interface Machine {
  id: number;
  type: MachineTypeEnum;
  state: MachineStateEnum;
}

export interface MachinesState {
  product: Product;
  machines: Machine[];
}

export const PRODUCTS = ['rice', 'sugar', 'wheat'] as const;
export type Product = (typeof PRODUCTS)[number];
