import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface StatusState {
  productInfo: boolean
}

const initialState: StatusState = {
  productInfo: false
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setProductInfo: (state, action: PayloadAction<boolean>) => {
      state.productInfo = action.payload;
    },
  },
});


export const statusActions = statusSlice.actions;

export const selectProductInfo = (state: RootState) => state.status.productInfo;
// export const selectProductCode = (state: RootState) => state.info.productCode;
// export const selectProductBrand = (state: RootState) => state.info.productBrand;


export default statusSlice.reducer;
