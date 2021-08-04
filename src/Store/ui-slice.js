import { createSlice } from "@reduxjs/toolkit";

const uiSliceInitialState = { notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState: uiSliceInitialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
