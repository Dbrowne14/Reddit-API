import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { SubredditPosts } from "./Posts"
import {Render_Base } from "../../utils/hostingPreferences" //for alt API_BASE_Local


export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Render_Base,
  }),
  reducerPath: "postsApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Posts"],
  endpoints: build => ({
    // Supply generics for the return type (in this case `SubRedditPosts`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getPosts: build.query<SubredditPosts, { subReddit: string }>({
      query: ({ subReddit }) => `r/${subReddit}`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: (_result, _error, arg) => [
        { type: "Posts", id: arg.subReddit },
      ],
    }),
  }),
})

export const { useGetPostsQuery } = postsApiSlice
