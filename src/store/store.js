import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReduces';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
