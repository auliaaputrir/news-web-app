import { configureStore } from '@reduxjs/toolkit';
import saveReducer from './slice/saveSlice';

const store = configureStore({
    reducer: {
        save: saveReducer,
    },
});

export default store;
