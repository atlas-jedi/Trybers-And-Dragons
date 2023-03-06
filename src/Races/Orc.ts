import Race from './Race';

class Orc extends Race {
  private readonly _maxLifePoints: number;
  private static population = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.population += 1;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }

  public static createdRacesInstances(): number { return this.population; }
}

export default Orc;