import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../constants';

interface IMainContainer {
  id: string;
  children: any;
}

export const MainContainer = ({children}: IMainContainer) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top + 20, paddingBottom: insets.bottom},
      ]}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.dark} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
