import axios from "axios";
import {
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  SET_FILTER_VALUE,
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

export const saveFilterInput = (filter) => ({
  type: SET_FILTER_VALUE,
  payload: filter,
});

export const fetchTransactions = () => {
  return (dispatch) => {
    dispatch(fetchTransactionsRequest());
    axios
      .get(`${BASE_URL}/transactions`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchTransactionsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchTransactionsFailure(error.message));
      });
  };
};
