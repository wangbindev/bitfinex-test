import styled from 'styled-components/native';
import {COLORS, DIMENSIONS} from '../constants';

import {ICustomStyleProp} from '../models/style';

export const Title = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.white};
  letter-spacing: 0.135px;
  font-size: ${28 * DIMENSIONS.multiplier}px;
`;

export const FlexBetweenWrapper = styled.View<ICustomStyleProp>`
  width: 100%;
  justify-content: space-between;
  align-items: ${({alignItems}) => alignItems || 'center'};
  flex-direction: row;
`;
export const BoldText = styled.Text<ICustomStyleProp>`
color: ${props => props.color || COLORS.white};
  font-weight: 700;
`;
