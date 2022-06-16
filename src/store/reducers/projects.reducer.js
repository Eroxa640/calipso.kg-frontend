import {createSlice} from '@reduxjs/toolkit'
import {createAsyncThunk} from '@reduxjs/toolkit' 
import axios from '../../api/axios'

const projectsSlice = createSlice({
  name: 'login',
  initialState: {
    loading: '',
    user: null,
  },
  extraReducers: {
  }
})

export default projectsSlice.reducer
export const { } = projectsSlice.actions