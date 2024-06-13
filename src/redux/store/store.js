import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counterSlicer";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
