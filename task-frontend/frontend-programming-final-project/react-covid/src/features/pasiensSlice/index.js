// import createSlice: untuk membuat slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/indonesia";

/**
 * Buat slice: untuk menghasilkan action dan reducers.
 * Menerima param object: name, initialState, reducers
 */
const pasiensSlice = createSlice({
  name: "Pasiens Slice",
  initialState: {
    pasiens: data,
  },
  reducers: {
    /**
     * action addMovie menerima 2 param: state dan action.
     * state berisi state movies saat ini.
     * action berisi payload atau data yang dikirim.
     */
    addPasien(state, action) {
      /**
       * Redux membolehkan untuk mengubah data array (mutate).
       * Cukup push untuk menambahkan data movie.
       */
      state.pasiens.push(action.payload);
    },
    /**
     * Membuat reducer updateMovies.
     * Digunakan untuk update state movies.
     */
    updatePasiens(state, action) {
      state.pasiens = action.payload;
    },
  },
});

/**
 * Slice menghasilkan action dan reducers
 * Nama action diambil dari nama reducer
 */

// generate action updateMovies
const { addPasien, updatePasiens } = pasiensSlice.actions;
const pasiensReducer = pasiensSlice.reducer;

// Export reducers dan actions
export default pasiensReducer;

// export action updateMovies
export { addPasien, updatePasiens };
