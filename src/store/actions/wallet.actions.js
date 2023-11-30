import axios from "axios";
import {
  FETCH_WALLET_REQUEST,
  FETCH_WALLET_SUCCESS,
  FETCH_WALLET_FAILURE,
} from "./../types/wallet.types";
import { BASE_URL } from ".";

const fetchWalletRequest = () => ({
  type: FETCH_WALLET_REQUEST,
});

const fetchWalletSuccess = (data) => ({
  type: FETCH_WALLET_SUCCESS,
  payload: data,
});

const fetchWalletFailure = (error) => ({
  type: FETCH_WALLET_FAILURE,
  payload: error,
});

export const fetchWalletData = () => {
  return (dispatch) => {
    dispatch(fetchWalletRequest());

    axios
      .get(`${BASE_URL}/wallet`)
      .then((response) => {
        dispatch(fetchWalletSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWalletFailure(error.message));
      });
  };
};
