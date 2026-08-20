import { createSlice, } from '@reduxjs/toolkit'

const form = createSlice({
  name: 'form',
  initialState: {
    name: null,
    email: null,
    college: null,
    userName: null,
    phone: null,
  },
  reducers: {
    changeName : (state, action)=>{
      state.name = action.payload;
    },
    changeEmail : (state, action)=>{
      state.email = action.payload;
    },
    changeCollege : (state, action)=>{
      state.college = action.payload;
    },
    changeUserName : (state, action)=>{
      state.userName = action.payload;
    },
    changePhone : (state, action)=>{
      state.phone = action.payload;
    },
  }
})

export const {
  changeName,
  changeEmail,
  changeUserName,
  changeCollege,
  changePhone,
} = form.actions;

export default form.reducer;