import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {loading: false, data: [], error: ''};

export const fetchData = createAsyncThunk("FETCH_DATA", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
})

const dataSlice = createSlice({
    name: "fetchData",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
    reducers: {
        clearData: (state) => {
            state.data = [];
        }
    }
})

export const  {clearData} = dataSlice.actions;
export default dataSlice.reducer;