import { HYDRATE } from "next-redux-wrapper";

const initialState = {};

const hydrateReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
  }
  return state;
};

export default hydrateReducer;
