import {
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  SET_FILTER_VALUE,
} from "../types/transactions.types";

export const filterInitialState = {
  startDate: new Date(),
  endDate: new Date(),
  range: "",
  transactionTypes: [],
  statusTypes: [],
  count: 0,
  activeCount: 0,
};

const initialState = {
  transactions: [],
  loading: false,
  error: null,
  filter: filterInitialState,
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
