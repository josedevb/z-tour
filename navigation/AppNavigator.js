import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigation from './AuthNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import ScanPlace from '../screens/ScanPlace'
export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigation,
  App: MainTabNavigator,
  PlacesScreen: ScanPlace,
}));