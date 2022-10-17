import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toolsApi = createApi({
  reducerPath: "toolsapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://easy-buy-shop-server.onrender.com/api/v1/tools",
  }),

  endpoints: (builder) => ({
    tools: builder.query({
      query: () => {
        return {
          url: `/getToolswithOutAuth/?limit=6`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useToolsQuery } = toolsApi;
