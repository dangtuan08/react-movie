import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tmdbApi from "../api/tmdbApi";

export const getListMovie = createAsyncThunk(
  "movie/getList",
  async ({ type, params }) => {
    console.log("callAPI");
    const response = await tmdbApi.getMoviesList(type, { params });
    return response.results;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: true,
    status: null,
    listMoviePopular: [],
    listMovieTopRate: [],
    listTVPopular: [],
    listTVTopRate: [],
    listSimilar: [],
  },
  reducers: {},
  extraReducers: {
    [getListMovie.pending]: (state, action) => {
      state.status = "loading";
    },
    [getListMovie.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "success";
      state.listMoviePopular = action.payload;
      state.loading = false;
    },
  },
});

export default movieSlice;
