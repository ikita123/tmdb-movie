// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieAPIs } from '../apis';

export const getTopMovieData = createAsyncThunk('appMovie/getTopMovieData', async params => {
  const response = await MovieAPIs.movieTopList({
      ...params
      })

  return {
  params,
  data: response.results,
  allData: response.results,
  total_pages:response.total_pages,
  total_results:response.total_results
}

})

export const getCurrentMovieData = createAsyncThunk('appMovie/getCurrentMovieData', async params => {
  const response = await MovieAPIs.movieNowPlayingList({
      ...params
      })

  return {
  params,
  newMovieData: response.results
}

})

export const movieSlice = createSlice({
  name: 'appMovie',
  initialState: {
    data: [],
    newData: []
    
  },
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(getTopMovieData.fulfilled, (state, action) => {
      if (action.payload.params.isParamChanged) {
      state.data = action.payload.data
    } else {
      state.data = [...state.data, ...action.payload.data]
    }
    state.allData = action.payload.allData
    state.total_pages = action.payload.total_pages
    state.total_results = action.payload.total_results

    state.params = action.payload.params
  })
  .addCase(getCurrentMovieData.fulfilled, (state, action) => {
    state.newMovieData = action.payload.newMovieData
  })
  },
});

export default movieSlice.reducer;
