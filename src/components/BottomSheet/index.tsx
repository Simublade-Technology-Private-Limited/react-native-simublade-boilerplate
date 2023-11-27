import React, {ReactNode, Ref, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

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
 */

interface CustomBottomSheetProps {
  children: ReactNode;
  sheetRef: Ref<BottomSheet>;
  detachedFromBottom?: boolean;
  snapPoints?: Array<string | number>;
  panDownToClose?: boolean;
  handleSheetChange?: (sheetIndex: number) => void;
}

const CustomBottomSheet = (props: CustomBottomSheetProps) => {
  const {
    children,
    sheetRef,
    detachedFromBottom,
    snapPoints,
    panDownToClose = true,
    handleSheetChange,
  } = props;
  const initialSnapPoints = useMemo(() => ['25%', '90%'], []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={1}
      // enableDynamicSizing={true}
      detached={detachedFromBottom}
      snapPoints={snapPoints || initialSnapPoints}
      enablePanDownToClose={panDownToClose}
      onChange={handleSheetChange}>
      {children}
    </BottomSheet>
  );
};

export default CustomBottomSheet;
