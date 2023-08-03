import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Product from 'src/models/Product';

const baseUrl = 'http://localhost:4000/';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => 'products/'
        }),
        getProduct: builder.query<Product, number>({
            query: (id: number) => `products/${id}`
        })
    })
});

export const {useGetProductsQuery} = productsApi;