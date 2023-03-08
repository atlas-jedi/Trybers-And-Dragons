import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Character | Fighter,
    protected enemies: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
  }

  public fight(): number {
    const enemiesAlive = () => this.enemies.every((e) => e.lifePoints > 0);

    while (this.player.lifePoints > 0 && enemiesAlive()) {
      this.enemies.forEach((enemy) => this.player.attack(enemy));
      this.enemies.forEach((enemy) => enemy.attack(this.player));
    }

    return super.fight();
  }
}