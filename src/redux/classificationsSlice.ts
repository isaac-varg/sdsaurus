import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ClassificationsState {
  hazardClassifications: any;
}

const initialState: ClassificationsState = {
  hazardClassifications: []
};

export const classificationsSlice = createSlice({
  name: "classifications",
  initialState,
  reducers: {
    setHazardClassifications: (state, action: PayloadAction<[]>) => {
      state.hazardClassifications = action.payload;
    },

  },
});

// export const { setCurrentY } = infoSlice.actions;

export const classificationActions = classificationsSlice.actions;

export const selectHazardClassifications = (state: RootState) => state.classifications.hazardClassifications



export default classificationsSlice.reducer;
