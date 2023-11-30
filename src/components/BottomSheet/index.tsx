import React, {ReactNode, Ref, useCallback, useMemo} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {COLORS} from '../../utils/constants/colors';
import {StyleProp, ViewStyle} from 'react-native';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

/**
 *
 * @param sheetRef: Bottom sheet ref exposing methods for handling      bottomsheet
 *
 * @param detachedFromBottom: Whether bottom sheet is detached from bottom or not. Default value is false
 *
 * @param snapPoints: Snap points provided for bottom sheet to snap to
 *
 * @param panDownToClose: Whether to close bottom sheet on pan down gesture or not
 *
 * @param handleSheetChange: Callback when the sheet position changed to a provided point.
 *
 * @param backgroundComponentStyle: View styles for bottomsheet background component
 *
 * @param containerStyle: View styles for container
 */

interface CustomBottomSheetProps {
  children: ReactNode;
  sheetRef: Ref<BottomSheetModal>;
  detachedFromBottom?: boolean;
  snapPoints?: Array<string | number>;
  panDownToClose?: boolean;
  handleSheetChange?: (sheetIndex: number) => void;
  backgroundComponentStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomBottomSheet = (props: CustomBottomSheetProps) => {
  const {
    children,
    sheetRef,
    detachedFromBottom,
    snapPoints,
    panDownToClose = true,
    handleSheetChange,
    backgroundComponentStyle,
    containerStyle,
  } = props;
  const initialSnapPoints = useMemo(() => ['25%', '70%'], []);

  // For rendering backdrop of modal
  const renderBackdrop = useCallback(
    (prop: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...prop}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={1}
      detached={detachedFromBottom}
      snapPoints={snapPoints || initialSnapPoints}
      enablePanDownToClose={panDownToClose}
      containerStyle={containerStyle}
      backgroundStyle={[
        {
          backgroundColor: COLORS.white_color,
        },
        backgroundComponentStyle,
      ]}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChange}
      onAnimate={(fromIndex, toIndex) => {
        if (toIndex === 0) {
          sheetRef?.current?.close();
        }
      }}>
      {children}
    </BottomSheetModal>
  );
};

export default CustomBottomSheet;
