import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ENV } from '../../bitfinex-export';
import { MainContainer } from '../../components';
import { Title, FlexBetweenWrapper, BoldText } from '../../components/styled-components';
import { STRINGS } from '../../constants';
import { useOrderBook } from '../../hooks/useOrderBook';
import { ListItem } from './components';

export interface IHomeScreen { }

const HomeScreen = ({ }: IHomeScreen) => {
  const { info } = useOrderBook(ENV.SOCKET_URL);
  return (
    <MainContainer id="home-screen">
      <FlexBetweenWrapper>
        <Title>{STRINGS.title}</Title>
        <BoldText>{'BTC/USD'}</BoldText>
      </FlexBetweenWrapper>
      <View style={styles.orderbook}>
        <View style={styles.subList}>
          <FlexBetweenWrapper>
            <BoldText>{'Total'}</BoldText>
            <BoldText>{'Price'}</BoldText>
          </FlexBetweenWrapper>
          <FlatList
            data={info.bids}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => `bids-${item[0]}`}
            renderItem={({ item, index }) => (
              <ListItem type='bids' index={index} data={item} />
            )}
          />
        </View>
        <View style={styles.subList}>
          <FlexBetweenWrapper>
            <BoldText>{'Price'}</BoldText>
            <BoldText>{'Total'}</BoldText>
          </FlexBetweenWrapper>
          <FlatList
            data={info.bids}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => `asks-${item[0]}`}
            renderItem={({ item, index }) => (
              <ListItem type='asks' index={index} data={item} />
            )}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  orderbook: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  subList: {
    width: '45%'
  },
  asks: {
    marginLeft: 10
  }
})
