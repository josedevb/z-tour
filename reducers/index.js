import { combineReducers } from "redux";

import auth from "./auth";
import {reducer as qr } from './qr';

export default combineReducers({
  auth,
  qr,
});