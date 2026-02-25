import { useAppSelector } from "../../app/hooks"
import { Post } from "./Post"
import { Post as PostType } from "../../types/types"
import { useGetPostsQuery } from "./postsApiSlice"
import { ProgressBar } from "../components/ProgressBar"

export interface SubredditPosts {
  [subreddit: string]: PostType[]
}

export const Posts: React.FC = () => {
  const selectedBucket = useAppSelector(state => state.bucket.selectedBucket)
  console.log(selectedBucket)

  const { data, isLoading, error } = useGetPostsQuery({
    subReddit: selectedBucket,
  })

  if (isLoading)
    return (
      <div className="flex flex-col gap-4 justify-start">
        <div className="w-full flex flex-row justify-start gap-2 items-center">
          <div className="w-fit px-8">Loading</div>
          <ProgressBar isLoading={isLoading} />
        </div>
        <p className="text-sm">Fetching from Reddit, awaiting response from subReddits...this may take some time</p>
      </div>
    )
  if (error || !data) return <div>error loading posts</div>

  console.log("error from useGetPostsQuery:", error)
  return (
    <>
      {data?.posts
        .filter(post => post.media !== null) // where no media returned
        .filter(post => !post.title?.toLowerCase().includes("nsfw")) //clear out any inappropriate
        .map((post, index) => (
          <Post key={index} data={post} id={index} />
        ))}
    </>
  )
}
