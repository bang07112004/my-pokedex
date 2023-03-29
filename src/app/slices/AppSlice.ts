import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "./../../utils/Types";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState: AppTypeInitialState = {
  toasts: [],
  userInfo: undefined,
};
export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<string>) => {
      const toasts = [...state.toasts];
      toasts.push(action.payload);
      state.toasts = toasts;
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
    setUserStatus: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const { setToast, clearToasts, setUserStatus } = AppSlice.actions;
