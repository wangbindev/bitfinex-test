import React from 'react';
import {MainContainer} from '../../components';
import {Title} from '../../components/styled-components';
import {STRINGS} from '../../constants';

export interface IHomeScreen {}

const HomeScreen = ({}: IHomeScreen) => {
  return (
    <MainContainer id="home-screen">
      <Title>{STRINGS.title}</Title>
    </MainContainer>
  );
};

export default HomeScreen;
