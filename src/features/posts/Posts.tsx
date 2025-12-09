import { useAppSelector } from "../../app/hooks"
import { Post } from "./Post"
import { Post as PostType } from "../../types/types"
import { useGetPostsQuery } from "./postsApiSlice"

export interface SubredditPosts {
  [subreddit: string]: PostType[]
}


export const Posts: React.FC = () => {
  const selectedBucket = useAppSelector(state => state.bucket.selectedBucket)
  console.log(selectedBucket)

  const {data, isLoading, error} = useGetPostsQuery({
    subReddit: selectedBucket
  })

  if(isLoading) return <div>Loading...</div>
  if(error || !data) return <div>error loading posts</div>


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
