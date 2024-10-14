import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('/api/items');
  return response.data;
});

export const crudSlice = createSlice({
  name: 'crud',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    editItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items[index] = action.payload;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addItem, editItem, deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
