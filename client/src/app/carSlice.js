import { createSlice } from '@reduxjs/toolkit'

export const carSlice = createSlice({
  name: 'searchCars',
  initialState: {
    condition: '',
    price:0,
    type:'',
    make: '',
    model:'',
    year:0,
    mileage:0,
    fuel:'',
    engineSize:0,
    power:0,
    gearbox:'',
    seats:0,
    doors:0,
    color:'',
  },
  reducers: {
    increment: state => {
      
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = carSlice.actions

export default carSlice.reducer