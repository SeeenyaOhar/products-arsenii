import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { productsApi } from 'src/redux/ProductsService';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

export const useAppDispatch: () => (typeof store.dispatch) = useDispatch;