import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('André');
const player2 = new Character('Almeida');
const player3 = new Character('Nowan');

// cheat de level 🤣
for (let i = 0; i < 3; i += 1) { player1.levelUp(); }

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export { 
  player1, 
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles, 
};