import React, {useRef, useState} from 'react';
import {AppText} from '../components/AppText';
import Theme from '../components/Theme';
import {View} from 'react-native';
import Checkbox from '../components/CheckBox';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import CustomBottomSheet from '../components/BottomSheet';
import Button from '../components/Button';
import {ButtonType} from '../components/Button/collection';
import {COLORS} from '../utils/constants/colors';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleCheckboxChange = (
    value: boolean | ((prevState: boolean) => boolean),
  ) => {
    setIsChecked(value);
  };

  return (
    <Theme isAreaInsets containerStyle={{backgroundColor: 'red'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <AppText>Home</AppText>
        <Checkbox
          label="Check me"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          containerStyle={{marginTop: 32}}
        />

        <CustomBottomSheet sheetRef={bottomSheetRef}>
          <View style={{flex: 1, padding: 24}}>
            <AppText>Hello, How are you</AppText>
          </View>
        </CustomBottomSheet>

        {/* Solid Button */}
        <Button
          buttonContainerStyle={{marginTop: 32}}
          buttonTitle={'I am Solid'}
          onPressHandler={() => {
            bottomSheetRef?.current?.present();
          }}
        />

        {/* Outlined Button */}
        <Button
          type={ButtonType.OUTLINE}
          buttonContainerStyle={{marginTop: 32}}
          buttonTitle={'I am Outlined'}
          onPressHandler={() => {
            bottomSheetRef?.current?.present();
          }}
        />

        {/* Gradient Button */}
        <Button
          type={ButtonType.GRADIENT}
          buttonContainerStyle={{marginVertical: 32}}
          buttonTextStyle={{color: COLORS.white_color}}
          buttonTitle={'I am Gradient'}
          onPressHandler={() => {
            bottomSheetRef?.current?.present();
          }}
        />

        {/* Clear Button */}
        <Button
          type={ButtonType.CLEAR}
          buttonTitle={'I am Clear'}
          onPressHandler={() => {
            bottomSheetRef?.current?.present();
          }}
        />
      </View>
    </Theme>
  );
};

export default Home;
