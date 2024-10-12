export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('saved-news');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state from localStorage:", err);
        return [];
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('saved-news', serializedState);
    } catch (err) {
        console.error("Could not save state to localStorage:", err);
    }
};
