import { configureStore } from "@reduxjs/toolkit";
import agentSlice from "../slices/agentSlice";



const store = configureStore({
  reducer:{
    agentSlice:agentSlice
  }
})

const { dispatch } = store;

export { store, dispatch }