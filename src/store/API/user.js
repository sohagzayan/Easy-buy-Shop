import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://easy-buy-shop-backend.vercel.app/api/v1/user/user",
  }),

  endpoints: (builder) => ({
    currentUser: builder.query({
      query: (id) => {
        return {
          url: `currentuser/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCurrentUserQuery } = userApi;
