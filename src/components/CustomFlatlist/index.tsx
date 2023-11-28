import {FlatList, FlatListProps, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';

interface CustomFlatlistProps extends FlatListProps<any> {
  onRefresh?: () => void;
}

const CustomFlatlist = (props: CustomFlatlistProps) => {
  const {onRefresh, ...otherProps} = props;

  const [isRefreshing, setIsRefreshing] = useState(false);

  // Handling refresh control
  useEffect(() => {
    if (isRefreshing) {
      onRefresh?.();

      // Set refreshing to false
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={() => {
            setIsRefreshing(true);
          }}
        />
      }
      {...otherProps}
    />
  );
};

export default CustomFlatlist;
