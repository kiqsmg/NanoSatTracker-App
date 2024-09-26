/* 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://200.135.85.227' }), // Replace process.env with the actual URL for testing
  tagTypes: ["Downlink"],
  endpoints: (build) => ({
    getDownlink: build.query({
      query: () => "floripasat1/downlink", // Ensure the endpoint is correct
      providesTags: ["Downlink"],
    }),
  }),
});

export const {
  useGetDownlinkQuery,
} = api;

*/