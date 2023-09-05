import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchGreeting = createAsyncThunk(
    'messages/fetchGreeting',
    async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/messages/random');
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  );

const messageSlice = createSlice ({
    name: 'message',
    initialState: {
        greeting: '',
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGreeting.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchGreeting.fulfilled, (state, action) => {
            state.isLoading = false;
            state.greeting = action.payload.Greeting;
        })
        .addCase(fetchGreeting.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export default messageSlice.reducer;