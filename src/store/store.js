import { configureStore } from '@reduxjs/toolkit';
import drinkReducer from './drinkSlice';

const store = configureStore({
  reducer: drinkReducer, // Since the original app state was effectively just the drink state directly or namespaced?
});

export default store;
