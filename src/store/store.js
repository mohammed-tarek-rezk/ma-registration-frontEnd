import { configureStore } from '@reduxjs/toolkit'
import navLinksSlice from './slices/navLinksSlice'
import communitiesSlice from './slices/communitiesSlice'



export const store = configureStore({
  reducer: {
    navLink: navLinksSlice,
    communities: communitiesSlice
  },
})
