import { configureStore } from '@reduxjs/toolkit';
import saveReducer from './slice/saveSlice';

const store = configureStore({
    reducer: {
        save: saveReducer,
    },
});
console.log("on create store: ", store.getState())

store.subscribe(() => {
    console.log("store change : ", store.getState())
})
export default store;
