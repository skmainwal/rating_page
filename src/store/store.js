import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const productAction = (id) => {
  return {
    type: "PROD_ID",
    payload: id,
  };
};

export const viewerAction = (id) => {
  return {
    type: "VIEW_ID",
    payload: id,
  };
};

export const addMore = (id) => {
  return {
    type: "MORE",
    payload: id,
  };
};
export const SortAction = (choice) => {
  return {
    type: "ADD_SORT",
    payload: choice,
  };
};

// initial state
const initialState = {
  product_id: null,
  viewer_id: null,
  more: null,
  addChoice: null,
};

const starReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROD_ID":
      return {
        ...state,
        product_id: action.payload,
      };

    case "VIEW_ID":
      return {
        ...state,
        viewer_id: action.payload,
      };
    case "MORE":
      return {
        ...state,
        more: action.payload,
      };
    case "ADD_SORT":
      return {
        ...state,
        addChoice: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(starReducer, composeWithDevTools());

export default store;
