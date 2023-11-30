export const actionTypes = {
  SET_START_DATE: "SET_START_DATE",
  SET_END_DATE: "SET_END_DATE",
  SET_SELECTED_FILTER_RANGES: "SET_SELECTED_FILTER_RANGES",
  SET_SELECTED_TRANSACTION_TYPES: "SET_SELECTED_TRANSACTION_TYPES",
  SET_SELECTED_STATUS_TYPES: "SET_SELECTED_STATUS_TYPES",
};

export const initialState = {
  startDate: new Date(),
  endDate: new Date(),
  selectedFilterRanges: [],
  selectedTransactionTypes: [],
  selectedStatusTypes: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_START_DATE:
      return { ...state, startDate: action.payload };
    case actionTypes.SET_END_DATE:
      return { ...state, endDate: action.payload };
    case actionTypes.SET_SELECTED_FILTER_RANGES:
      return { ...state, selectedFilterRanges: action.payload };
    case actionTypes.SET_SELECTED_TRANSACTION_TYPES:
      return { ...state, selectedTransactionTypes: action.payload };
    case actionTypes.SET_SELECTED_STATUS_TYPES:
      return { ...state, selectedStatusTypes: action.payload };
    default:
      return state;
  }
};
