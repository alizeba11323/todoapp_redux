import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfIceCream: 10,
};

const IceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordericeCream(state, action) {
      state.noOfIceCream -= action.payload;
    },
    restockiceCream(state, action) {
      state.noOfIceCream += action.payload;
    },
  },
});

export default IceCreamSlice.reducer;
export const { ordericeCream, restockiceCream } = IceCreamSlice.actions;
