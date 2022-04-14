import React, {FunctionComponent} from 'react';
import {
  Image,
  ImageURISource,
  TouchableOpacity as NativeButton,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IProp {
  uri?: ImageURISource;
  source?: any;
  style?: any;
  imageStyle?: any;
  onPress?: () => void;
  disabled?: boolean;
  activeOpacity?: number;
  gestureBtn?: boolean;
}

export const ImageButton: FunctionComponent<IProp> = ({
  uri,
  source,
  style,
  imageStyle,
  onPress,
  disabled,
  activeOpacity,
  gestureBtn = false,
}) => {
  if (gestureBtn) {
    <TouchableOpacity
      disabled={disabled}
      style={style}
      onPress={onPress}
      activeOpacity={activeOpacity || 0.8}>
      <Image style={imageStyle} source={source ? source : {uri}} />
    </TouchableOpacity>;
  }
  return (
    <NativeButton
      disabled={disabled}
      style={style}
      onPress={onPress}
      activeOpacity={activeOpacity || 0.8}>
      <Image style={imageStyle} source={source ? source : {uri}} />
    </NativeButton>
  );
};
