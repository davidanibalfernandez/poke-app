import {
  colorsTypes,
  colorsStats,
  iconTypes,
  nameStats,
  genderRatio,
} from './constants';

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


export const getGenderRatio = (value: number) => {
  const gender = genderRatio.find(g => g.value === value);
  return {
    male: gender?.label.male,
    female: gender?.label.female,
    isUnknown: gender?.label.isUnknown,
  };
}

export const getStatsRatio = (value: number | null): string | undefined => {
  const ratios = [
    {value: 1, label: 'ataque > defensa'},
    {value: -1, label: 'ataque < defensa'},
    {value: 0, label: 'ataque = defensa'}
  ];

  return ratios.find(r => r.value === value)?.label;
}