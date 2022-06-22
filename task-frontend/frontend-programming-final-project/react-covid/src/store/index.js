// Import configure store: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import pasiensReducer from "../features/pasiensSlice/index";

/**
 * Membuat store menggunakan configureStore.
 * Menerima param object: reducer.
 * Tambahkan Slice Reducer Movies ke Store.
 */
const store = configureStore({
  reducer: {
    pasiens: pasiensReducer,
  },
});

// Export Store
export default store;
