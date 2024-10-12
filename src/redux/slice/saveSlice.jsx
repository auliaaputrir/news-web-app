import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../../utils/localStorage';

const initialState = {
    data: loadState() || [],
};

console.log(initialState.data);


const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers: {
        toggleSaveNews: (state, action) => {
            const newsItem = action.payload;
            const existingItem = state.data.find(item => item._id === newsItem._id);
            
            if (existingItem) {
                // If it's already saved, remove it
                state.data = state.data.filter(item => item._id !== newsItem._id);
                
            } else {
                // If it's not saved, add it
                state.data.push(newsItem);
            }
            // Save the updated state to localStorage
            saveState(state.data);
        },
    }
});

export const { toggleSaveNews } = saveSlice.actions;
export default saveSlice.reducer;
