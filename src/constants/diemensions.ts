import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const multiplier = width / 400;

export const DIMENSIONS = {
  width,
  height,
  multiplier,
  calW: (value: number) => value * multiplier,
  _calW: (value: number) => width - value * multiplier,
  px5: 5 * multiplier,
  px8: 8 * multiplier,
  px10: 10 * multiplier,
  px12: 12 * multiplier,
  px14: 14 * multiplier,
  px16: 16 * multiplier,
  px18: 18 * multiplier,
  px20: 20 * multiplier,
  px24: 24 * multiplier,
  px25: 25 * multiplier,
  px28: 28 * multiplier,
  px30: 30 * multiplier,
};
