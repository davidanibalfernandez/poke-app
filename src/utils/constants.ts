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

export const colorsTypes = [
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

export const iconTypes = [
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

export const colorsStats = [
  {color: 'hp', value: '#63BB5B'},
  {color: 'attack', value: '#C96262'},
  {color: 'defense', value: '#3C479A'},
  {color: 'special-attack', value: '#FEA202'},
  {color: 'special-defense', value: '#00CED1'},
  {color: 'speed', value: '#F3D23B'},
  {color: 'total', value: '#DFDFDF'},
];

export const nameStats = [
  {label: 'hp', value: 'HP'},
  {label: 'attack', value: 'Atk'},
  {label: 'defense', value: 'Def'},
  {label: 'special-attack', value: 'SP. Atk'},
  {label: 'special-defense', value: 'SP. Def'},
  {label: 'speed', value: 'Speed'},
];

export const sorts = [
  {value: 'number-asc', label: 'Numerical Order ASC'},
  {value: 'number-desc', label: 'Numerical Order DESC'},
  {value: 'name-asc', label: 'A - Z'},
  {value: 'name-desc', label: 'Z - A'},
  {value: 'weight-asc', label: 'Lightest - Heaviest'},
  {value: 'weight-desc', label: 'Heaviest - Lightest'},
  {value: 'height-asc', label: 'Shortest - Tallest'},
  {value: 'height-desc', label: 'Tallest - Shortest'},
];

export const generations = [
  {value: 'generation-i', label: 'Generación 1'},
  {value: 'generation-ii', label: 'Generación 2'},
  {value: 'generation-iii', label: 'Generación 3'},
  {value: 'generation-iv', label: 'Generación 4'},
  {value: 'generation-v', label: 'Generación 5'},
  {value: 'generation-vi', label: 'Generación 6'},
  {value: 'generation-vii', label: 'Generación 7'},
  {value: 'generation-viii', label: 'Generación 8'},
];

export const pokemonIdToRemoveFromPokedex = 1025;

export const genderRatio = [
  {value: 0, label: {male: '100%', female: '0%', isUnknown: false}},
  {value: 1, label: {male: '88.14%', female: '11.86%', isUnknown: false}},
  {value: 2, label: {male: '75.50%', female: '24.50%', isUnknown: false}},
  {value: 4, label: {male: '50.20%', female: '49.80%', isUnknown: false}},
  {value: 6, label: {male: '24.90%', female: '75.10%', isUnknown: false}},
  {value: 7, label: {male: '11.46%', female: '88.54%', isUnknown: false}},
  {value: 8, label: {male: '0%', female: '100%', isUnknown: false}},
  {value: -1, label: {male: '', female: '', isUnknown: true}},
];