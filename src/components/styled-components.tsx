import styled from 'styled-components/native';
import {COLORS, DIMENSIONS} from '../constants';

import {ICustomStyleProp} from '../models/style';

export const Title = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.white};
  letter-spacing: 0.135px;
  font-size: ${28 * DIMENSIONS.multiplier}px;
`;
