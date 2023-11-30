import axios from "axios";
import {
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  FETCH_TRANSACTIONS_LOADING,
} from "../types/transactions.types";
import { BASE_URL } from ".";

export const fetchTransactionsRequest = () => ({
  type: FETCH_TRANSACTIONS_REQUEST,
});

export const fetchTransactionsSuccess = (data) => ({
  type: FETCH_TRANSACTIONS_SUCCESS,
  payload: data,
});

export const fetchTransactionsFailure = (error) => ({
  type: FETCH_TRANSACTIONS_FAILURE,
  payload: error,
});

export const loading = (loading) => ({
  type: FETCH_TRANSACTIONS_LOADING,
  payload: loading,
});

export const fetchTransactions = () => {
  return (dispatch) => {
    dispatch(fetchTransactionsRequest());
    dispatch(loading(true));
    axios
      .get(`${BASE_URL}/transactions`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchTransactionsSuccess(data));
        dispatch(loading(false));
      })
      .catch((error) => {
        dispatch(loading(false));
        dispatch(fetchTransactionsFailure(error.message));
      });
  };
};
