import {configureStore} from '@reduxjs/toolkit'
import projectsSlice from './reducers/projects.reducer'

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
  }
})