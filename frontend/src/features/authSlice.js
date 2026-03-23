import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
