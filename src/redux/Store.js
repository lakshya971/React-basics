import { configureStore } from '@reduxjs/toolkit'
import Counter from '../features/counter/Counter.jsx'

export const Store = configureStore({
    reducer:{
        counter: Counter,
    }
});

export default Store;