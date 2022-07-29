import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import carSlice from './carSlice.js'
// import authSlice from './authSlice.js'

export const store = configureStore({
  reducer: {
    // import slces here
    searchCars:carSlice,
  }
})