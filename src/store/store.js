import { configureStore } from '@reduxjs/toolkit'
import navLinksSlice from './slices/navLinksSlice'
import landingSlice from './slices/landingSlice'



export const store = configureStore({
  reducer: {
    navLink: navLinksSlice,
    landing: landingSlice
  },
})
