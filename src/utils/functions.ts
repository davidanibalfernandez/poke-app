import PokeAPI from 'pokedex-promise-v2';
import {
  BugIcon,
  DarkIcon,
  DragonIcon,
  ElectricIcon,
  FairyIcon,
  FightingIcon,
  FireIcon,
  FlyingIcon,
  GhostIcon,
  GrassIcon,
  GroundIcon,
  IceIcon,
  NormalIcon,
  PoisonIcon,
  PsychicIcon,
  RockIcon,
  SteelIcon,
  WaterIcon,
} from '../assets';

const colorsTypes = [
  {color: 'normal', value: '#979797'},
  {color: 'fire', value: '#FF6132'},
  {color: 'water', value: '#2D91FE'},
  {color: 'electric', value: '#F3D23B'},
  {color: 'grass', value: '#63BB5B'},
  {color: 'ice', value: '#74CEC0'},
  {color: 'fighting', value: '#FEA202'},
  {color: 'poison', value: '#9750CE'},
  {color: 'ground', value: '#A9783D'},
  {color: 'flying', value: '#96CAFC'},
  {color: 'psychic', value: '#F97176'},
  {color: 'bug', value: '#A1A423'},
  {color: 'rock', value: '#BABA88'},
  {color: 'ghost', value: '#6B4272'},
  {color: 'dragon', value: '#5363D6'},
  {color: 'dark', value: '#474747'},
  {color: 'steel', value: '#5A8EA1'},
  {color: 'fairy', value: '#FFAFFE'},
];

const iconTypes = [
  {icon: 'normal', value: NormalIcon()},
  {icon: 'fire', value: FireIcon()},
  {icon: 'water', value: WaterIcon()},
  {icon: 'electric', value: ElectricIcon()},
  {icon: 'grass', value: GrassIcon()},
  {icon: 'ice', value: IceIcon()},
  {icon: 'fighting', value: FightingIcon()},
  {icon: 'poison', value: PoisonIcon()},
  {icon: 'ground', value: GroundIcon()},
  {icon: 'flying', value: FlyingIcon()},
  {icon: 'psychic', value: PsychicIcon()},
  {icon: 'bug', value: BugIcon()},
  {icon: 'rock', value: RockIcon()},
  {icon: 'ghost', value: GhostIcon()},
  {icon: 'dragon', value: DragonIcon()},
  {icon: 'dark', value: DarkIcon()},
  {icon: 'steel', value: SteelIcon()},
  {icon: 'fairy', value: FairyIcon()},
];

const colorsStats = [
  {color: 'hp', value: '#63BB5B'},
  {color: 'attack', value: '#C96262'},
  {color: 'defense', value: '#3C479A'},
  {color: 'special-attack', value: '#FEA202'},
  {color: 'special-defense', value: '#00CED1'},
  {color: 'speed', value: '#F3D23B'},
  {color: 'total', value: '#DFDFDF'},
];

const nameStats = [
  {label: 'hp', value: 'HP'},
  {label: 'attack', value: 'Atk'},
  {label: 'defense', value: 'Def'},
  {label: 'special-attack', value: 'SP. Atk'},
  {label: 'special-defense', value: 'SP. Def'},
  {label: 'speed', value: 'Speed'},
];

export const getColorType = (rawColor: string): string => {
  return colorsTypes.find(color => color.color === rawColor)?.value ?? '#fff';
};

export const getColorStat = (rawColor: string): string => {
  return (
    colorsStats.find(color => color.color === rawColor)?.value ?? '#DFDFDF'
  );
};

export const getIconType = (rawType: string): string => {
  return iconTypes.find(color => color.icon === rawType)?.value ?? '';
};

export const getStatName = (statName: string): string => {
  return nameStats.find(n => n.label === statName)?.value ?? '';
};

export const randomColor = (): string => {
  let result = '';
  for (let i = 0; i < 6; ++i) {
    const value = Math.floor(16 * Math.random());
    result += value.toString(16);
  }
  return '#' + result;
};
