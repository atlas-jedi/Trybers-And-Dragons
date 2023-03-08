import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints() { return this._lifePoints; }
  public get strength() { return this._strength; }

  public receiveDamage(attackPoints: number): number {
    const newHp = this._lifePoints - attackPoints;

    if (newHp > 0) {
      this._lifePoints = newHp;
    } else {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength); 
  }
}