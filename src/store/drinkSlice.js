import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  drinks: [],
  error: '',
  spirits: [
    'Absinthe', 'Ale', 'Beer', 'Brandy', 'Champagne', 'Cognac', 'Gin',
    'Port', 'Rum', 'Scotch', 'Sherry', 'Tequila', 'Vermouth', 'Vodka',
    'Whiskey', 'Wine'
  ],
};

export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async (word) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${word}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }
  const data = await response.json();
  return data.drinks;
});

const drinkSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrinks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.loading = false;
        state.drinks = action.payload || []; // API returns null sometimes
        state.error = '';
      })
      .addCase(fetchDrinks.rejected, (state, action) => {
        state.loading = false;
        state.drinks = [];
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default drinkSlice.reducer;
