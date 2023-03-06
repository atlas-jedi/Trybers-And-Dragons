import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _population = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._population += 1;
  }

  static createdArchetypeInstances() {
    return this._population;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}