import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phoneApi = createApi({
  reducerPath: "phoneApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/auth" }),
  endpoints: (builder) => ({
    sendPhone: builder.mutation({
      query: (data) => ({
        url: "/send-otp",
        method: "POST",
        body: data,
      }),
    }),
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    completeProfile: builder.mutation({
      query: (data) => ({
        url: "/complete-profile",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCompleteProfileMutation,
  useSendPhoneMutation,
  useSendOtpMutation,
} = phoneApi;
