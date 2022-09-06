import { combineReducers } from "redux";
import hydrateReducer from "./hydrateReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  hydrateReducer: hydrateReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
