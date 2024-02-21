import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUserDetails: null
};
const slice = createSlice({
  name: "agentSlice",
  initialState,

  reducers: {
    setSelectedUserDetails(state, action) {
      state.selectedUserDetails = action.payload;
    },
  },
});

export const { setSelectedUserDetails } = slice.actions;

export default slice.reducer;
