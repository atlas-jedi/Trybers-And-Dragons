import Race from './Race';

class Elf extends Race {
  private readonly _maxLifePoints: number;
  private static population = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.population += 1;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }

  public static createdRacesInstances(): number { return this.population; }
}

export default Elf;