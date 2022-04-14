import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ENV } from '../../bitfinex-export';
import {MainContainer} from '../../components';
import {Title} from '../../components/styled-components';
import {STRINGS} from '../../constants';
import { useOrderBook } from '../../hooks/useOrderBook';
import { ListItem } from './components';

export interface IHomeScreen {}

const HomeScreen = ({}: IHomeScreen) => {
  const {info}=useOrderBook(ENV.SOCKET_URL);
  return (
    <MainContainer id="home-screen">
      <Title>{STRINGS.title}</Title>
      <View style={styles.orderbook}>
      <FlatList
        data={info.bids}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ListItem type='bids' index={index} data={item} />
        )}
      />
      <FlatList
        data={info.asks}
        showsVerticalScrollIndicator={false}
        style={styles.asks}
        renderItem={({item, index}) => (
          <ListItem type='asks' index={index} data={item} />
        )}
      />
      </View>
    </MainContainer>
  );
};

export default HomeScreen;

const styles=StyleSheet.create({
   orderbook:{
     flexDirection:'row'
   },
   asks:{
     marginLeft:10
   }
})
