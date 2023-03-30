import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from './slice'

const store = configureStore({
    reducer: {
        playlist: playlistReducer
    }
})

export default store;