import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': '42bbe82a2bmshdfc1bc15b237e63p1223f4jsn40acde40e8db',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
  };

  const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';

  const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => createRequest(``)
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;