import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/product" }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/add-product",
        method: "POST",
        body: data,
      }),
    }),
    getProducts: builder.query({
      query: () => "/get-products",
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery } = productApi;
