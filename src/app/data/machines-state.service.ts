import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MachinesState, Product, PRODUCTS } from './machine-state.model';
import { MachineStateEnum } from './enums/machine-state.enum';
import { MachineTypeEnum } from './enums/machine-type.enum';
import { getRandomEnumValue } from '../shared/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class MachinesStateService {
  public getMachinesData(): Observable<MachinesState> {
    return this.randomizeMachineData();
  }

  public randomizeMachineData(): Observable<MachinesState> {
    return of({
      product: this.getRandomProduct(),
      machines: [
        {
          id: 1,
          type: MachineTypeEnum.SCALE,
          state: getRandomEnumValue(MachineStateEnum),
        },
        {
          id: 2,
          type: MachineTypeEnum.ATTACHER,
          state: getRandomEnumValue(MachineStateEnum),
        },
        {
          id: 3,
          type: MachineTypeEnum.PACKER,
          state: getRandomEnumValue(MachineStateEnum),
        },
        {
          id: 4,
          type: MachineTypeEnum.CLOSER,
          state: getRandomEnumValue(MachineStateEnum),
        },
      ],
    });
  }

   getRandomProduct(): Product {
    return PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
  }
}
