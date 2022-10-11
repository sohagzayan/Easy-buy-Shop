import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://easy-buy-shop-server.onrender.com/api/v1/user/user",
  }),

  endpoints: (builder) => ({
    currentUser: builder.query({
      query: (id) => {
        console.log("CurrentUser Id", id);
        return {
          url: `currentuser/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCurrentUserQuery } = userApi;
