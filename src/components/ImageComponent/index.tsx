import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SvgUri} from 'react-native-svg';
import {styles} from './styles';
import {COLORS} from '../../utils/constants/colors';
import {globalStyles} from '../../utils/globalStyles';
import {getExtension} from '../../utils/globalFunctions';

interface ImageComponentProps {
  onPress?: () => void;
  image: any;
  containerStyle?: ViewStyle;
  loaderWrapperStyle?: ViewStyle;
  indicatorStyle?: ViewStyle;
  resizeMode?: any;
  indicatorColor?: string;
  imageStyle?: any;
  activeOpacity?: any;
  disabled?: boolean;
}

const ImageComponent = ({
  onPress,
  image,
  containerStyle,
  loaderWrapperStyle,
  indicatorStyle,
  resizeMode,
  imageStyle,
  indicatorColor = COLORS.neutralLightGray,
  activeOpacity = 0.7,
  disabled,
}: ImageComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[styles.snapWrapper, containerStyle]}
      disabled={disabled}>
      {isLoading && image?.uri && (
        <View style={[styles.indicatorWrap, loaderWrapperStyle]}>
          <ActivityIndicator
            size="small"
            style={[styles.indicator, indicatorStyle]}
            color={indicatorColor}
          />
        </View>
      )}

      {getExtension(image?.uri)?.[0] === 'svg' ? (
        <SvgUri
          style={[globalStyles.img, imageStyle]}
          width="100%"
          height="100%"
          uri={image?.uri}
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <FastImage
          style={[globalStyles.img, imageStyle]}
          source={image}
          resizeMode={resizeMode || FastImage.resizeMode.contain}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </TouchableOpacity>
  );
};

export default ImageComponent;
