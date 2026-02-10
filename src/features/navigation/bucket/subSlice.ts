// subCount: subAboutJson.data.subscribers,
// image: findImg(subAboutJson)

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { SubReddit } from "../../../types/types"
import { API_BASE_Local, Render_Base } from "../../../utils/hostingPreferences"

export const subSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_Local 
  }),
  reducerPath: "subApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Subs"],
  endpoints: build => ({
    getSub: build.query<SubReddit, string>({
      query: subReddit => `r/${subReddit}/about`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: (_result, _error, arg) => [{ type: "Subs", id: arg }],
    }),
  }),
})

export const { useGetSubQuery } = subSlice
