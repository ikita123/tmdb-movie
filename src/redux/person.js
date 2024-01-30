// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PersonAPIs } from '../apis';

export const getPopularPersonData = createAsyncThunk('appPerson/getPopularPersonData', async params => {
  const response = await PersonAPIs.popularPersonList({
      ...params
      })
  return {
  params,
  personData: response.results
}

})

export const personSlice = createSlice({
  name: 'appPerson',
  initialState: {
    personData: [],
    
  },
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(getPopularPersonData.fulfilled, (state, action) => {
      if (action.payload.params.isParamChanged) {
      state.personData = action.payload.personData
    }
  })
  },
});

export default personSlice.reducer;
