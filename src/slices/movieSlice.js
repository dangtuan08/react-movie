import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tmdbApi from "../api/tmdbApi";

export const getListMovie = createAsyncThunk(
  "movie/getList",
  async (type, params) => {
    const response = await tmdbApi.getMoviesList(type, params);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    listMovivePopular: [],
    listMoviveTopRate: [],
    listTVPopular: [],
    listTVTopRate: [],
    listSimilar: [],
  },
  reducers: {},
  extraReducers: {
    [getListMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getListMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.listMovivePopular = action.payload;
    },
  },
});

export default movieSlice;
