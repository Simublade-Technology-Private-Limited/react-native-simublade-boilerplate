import React, {ReactNode} from 'react';
import {ImageResizeMode, ImageSourcePropType} from 'react-native';
import {
  ScrollView,
  ScrollViewProps,
  ViewProps,
  View,
  ImageBackground,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IMAGES} from '../../utils/constants/assets';
import {DIMENSION_CONSTANT} from '../../utils/constants/dimensConstant';
import {COLORS} from '../../utils/constants/colors';
import {globalStyles} from '../../utils/globalStyles';
import KeyboardAvoidView from '../KeyboardAvoidingView';
import Header, {HeaderProps} from '../Header';

type ThemeOwnProps = {
  children: ReactNode;
  backgroundImage?: ImageSourcePropType;
  isScrollView?: boolean;
  isBackgroundImage?: boolean;
  hideHeader?: boolean;
  isKeyboardAvoidingView?: boolean;
  hideMargin?: boolean;
  isAreaInsets?: boolean;
  headerComponent?: ReactNode;
  background?: string;
  scrollBounce?: boolean;
  scrollViewBottomPadding?: number;
};

type Combined = ThemeOwnProps & HeaderProps;

export type ThemeScrollViewProps = Combined & {
  parentContainerProps?: ScrollViewProps;
};

const Theme: React.FC<ThemeScrollViewProps> = ({
  children,
  isBackgroundImage = false,
  backgroundImage,
  hideMargin,
  isAreaInsets,
  background,
  scrollBounce = true,
  ...props
}) => {
  const {top} = useSafeAreaInsets();

  const ParentView = isBackgroundImage ? ImageBackground : View;
  const ParentContainer = props.isScrollView ? ScrollView : View;

  const parentViewProps: {
    source?: ImageSourcePropType;
    resizeMode?: ImageResizeMode;
  } & ViewProps = {};

  const parentProps: ScrollViewProps & ViewProps = {};

  if (props.isScrollView) {
    parentProps.contentContainerStyle = [
      {
        flexGrow: 1,
      },
    ];
    parentProps.bounces = scrollBounce;

    parentProps.keyboardShouldPersistTaps = 'always';

    parentProps.showsVerticalScrollIndicator = false;

    // Overwrite default container styles
    if (props.parentContainerProps?.contentContainerStyle) {
      parentProps?.contentContainerStyle.push(
        props.parentContainerProps.contentContainerStyle,
      );
    }
  }

  if (isBackgroundImage) {
    parentViewProps.source = backgroundImage || IMAGES.cart;
  }

  parentProps.style = [
    {
      marginHorizontal: hideMargin
        ? undefined
        : DIMENSION_CONSTANT.standard.margin_horizontal,
      flex: 1,
      marginTop: isAreaInsets ? top : undefined,
    },
  ];

  //Overwrite default styles
  if (props.parentContainerProps?.style) {
    parentProps.style.push(props.parentContainerProps?.style);
  }

  const renderChild = () => {
    return (
      <ParentContainer {...props.parentContainerProps} {...parentProps}>
        {children}
      </ParentContainer>
    );
  };

  return (
    <ParentView
      {...parentViewProps}
      style={[
        globalStyles.flex1,
        {backgroundColor: background || COLORS.primary_background_color},
      ]}>
      {!props.hideHeader && (
        <>{props.headerComponent || <Header {...props} />}</>
      )}

      {props.isKeyboardAvoidingView ? (
        <KeyboardAvoidView style={{flex: 1}}>{renderChild()}</KeyboardAvoidView>
      ) : (
        renderChild()
      )}
    </ParentView>
  );
};

export default Theme;
