import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpComplete from '../screens/SignUpComplete';
import SignUpFinal from '../screens/SignUpComplete'
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

export default createStackNavigator({
  Auth: LoginScreen,
  SignUp: SignUpScreen,
  SignUpComplete,
  SignUpFinal,
  ForgetPassword: ForgetPasswordScreen,
});