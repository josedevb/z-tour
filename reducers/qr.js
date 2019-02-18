import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  showQrScanner: ['showQR'],
  setQrData: ['QRData'],
});

export const INITIAL_STATE = { showQR: false, QRData: null }

export const toggleScanner = (state = INITIAL_STATE, action) => {
  return { ...state, showQR: action.showQR }
}

export const setQrData = (state = INITIAL_STATE, action) => {
  return { ...state, QRData: action.QRData }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_QR_SCANNER]: toggleScanner,
  [Types.SET_QR_DATA]: setQrData,
});

export const QRTypes = Types;
export default Creators;