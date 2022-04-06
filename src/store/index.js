import { configureStore, createSlice } from "@reduxjs/toolkit";
const clientIdSlice = createSlice({
  name: "userData",
  initialState: {
    clientId:
      "750035540347-r58mmkvk5d51i9er0askki6aun1jvqjk.apps.googleusercontent.com",
    userDetails: "",
    inactivityCounter: 0,
  },
  reducers: {
    setClientId(state, action) {
      state.clientId = action.payload;
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    setInactivityCounter(state) {
      state.inactivityCounter++;
    },
    resetInactivityCounter(state) {
      state.inactivityCounter = 0;
    },
  },
});
export const actions = clientIdSlice.actions;
const store = configureStore({
  reducer: clientIdSlice.reducer,
});
export default store;
