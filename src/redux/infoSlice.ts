import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface InfoState {
  productName: string
  productCode: string
  productBrand: string
}

const initialState: InfoState = {
  productName: "",
  productCode: "",
  productBrand: "",
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
    setProductCode: (state, action: PayloadAction<string>) => {
      state.productCode = action.payload;
    },
    setProductBrand: (state, action: PayloadAction<string>) => {
      state.productBrand = action.payload;
    },

  },
});

// export const { setCurrentY } = infoSlice.actions;

export const infoActions = infoSlice.actions;

export const selectProductName = (state: RootState) => state.info.productName;
export const selectProductCode = (state: RootState) => state.info.productCode;
export const selectProductBrand = (state: RootState) => state.info.productBrand;


export default infoSlice.reducer;
