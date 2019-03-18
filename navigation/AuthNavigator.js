import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

export default createStackNavigator({
  Auth: LoginScreen,
  SignUp: SignUpScreen,
  ForgetPassword: ForgetPasswordScreen,
});