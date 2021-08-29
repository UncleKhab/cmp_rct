import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  email: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.isAuth = true;
    },
    logout(state) {
      state.email = "";
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
