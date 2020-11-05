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

// initial state
const initialState = { product_id: null, viewer_id: null };

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
    default:
      return state;
  }
};

const store = createStore(starReducer, composeWithDevTools());

export default store;
