import { configureStore } from "@reduxjs/toolkit";
import pdfReducer from "./pdfSlice";
import infoReducer from "./infoSlice"
import classificationsReducer from "./classificationsSlice"
import statusReducer from "./statusSlice"

export const store = configureStore({
  reducer: {
    pdf: pdfReducer,
    info: infoReducer,
    classifications: classificationsReducer,
    status: statusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
