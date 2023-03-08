import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints() { return this._lifePoints; }
  public get strength() { return this._strength; }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;

    if (damage > 0) {
      this._lifePoints = damage;
    } else if (damage <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength); 
  }
}