import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { phone: null },
  reducers: {
    addPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { addPhone } = authSlice.actions;
export default authSlice.reducer;
