import {colorsTypes, colorsStats, iconTypes, nameStats} from './constants';

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
