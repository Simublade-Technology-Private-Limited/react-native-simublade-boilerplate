import React, {useRef, useState} from 'react';
import {AppText} from '../components/AppText';
import Theme from '../components/Theme';
import {View} from 'react-native';
import Checkbox from '../components/CheckBox';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomBottomSheet from '../components/BottomSheet';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleCheckboxChange = (
    value: boolean | ((prevState: boolean) => boolean),
  ) => {
    setIsChecked(value);

    if (value) {
      bottomSheetRef?.current?.expand();
    }
  };

  return (
    <Theme isAreaInsets containerStyle={{backgroundColor: 'red'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <AppText>Home</AppText>
        <Checkbox
          label="Check me"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        />

        <CustomBottomSheet sheetRef={bottomSheetRef}>
          <View style={{flex: 1, padding: 24}}>
            <AppText>Hello, How are you</AppText>
          </View>
        </CustomBottomSheet>
      </View>
    </Theme>
  );
};

export default Home;
