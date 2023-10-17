import React, {PureComponent} from 'react';
import NetInfo, {
  NetInfoState,
  NetInfoSubscription,
} from '@react-native-community/netinfo';

import {STRING_CONSTANTS} from '../utils/constants/stringConstants';
import {showToast} from './ToastConfig';
import {ToastType} from './toast/collection';

class NetworkManager extends PureComponent {
  unsubscribe: NetInfoSubscription | undefined;

  currentNetworkStatus: boolean | null = null;
  connectionErrorShown = false;

  networkLostTimer: null | number = null;

  handleNetworkStateChanged = (isConnected: boolean) => {
    if (isConnected) {
      if (this.networkLostTimer) {
        clearTimeout(this.networkLostTimer);
        this.networkLostTimer = null;
        return;
      }
    } else {
      if (!this.networkLostTimer) {
        this.networkLostTimer = setTimeout(() => {
          if (!this.currentNetworkStatus) {
            showToast(STRING_CONSTANTS.connection_offline, ToastType.ERROR);
          }
        }, 3000);
      }
    }
  };

  connectionChangeHandler = ({isConnected}: NetInfoState) => {
    if (isConnected === false) {
      this.handleNetworkStateChanged(isConnected);
    } else if (isConnected === true) {
      if (this.connectionErrorShown) {
        showToast(STRING_CONSTANTS.connection_online, ToastType.SUCCESS);
        this.handleNetworkStateChanged(isConnected);
      }
    }
    this.currentNetworkStatus = isConnected;
  };

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(this.connectionChangeHandler);
  }

  componentWillUnmount() {
    this.unsubscribe?.();
    if (this.networkLostTimer) {
      clearTimeout(this.networkLostTimer);
      this.networkLostTimer = null;
    }
  }

  render() {
    return <></>;
  }
}

export default NetworkManager;
