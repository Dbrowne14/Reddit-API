import { useAppSelector } from "../../app/hooks"
import { Post } from "./Post"
import { Post as PostType } from "../../types/types"
import { useGetPostsQuery } from "./postsApiSlice"

export interface SubredditPosts {
  [subreddit: string]: PostType[]
}

const dummyData: SubredditPosts = {
  educatinggifs: [
    {
      title: "This is what a Magic Eye (autostereogram) image looks like",
      media: {
        type: "gif",
        url: "https://i.redd.it/lwz0amr7il5g1.gif",
        width: 800,
        height: 515,
      },
      upvote_ratio: 0.9,
    },
    {
      title: "The cardiac cycle",
      media: {
        type: "video",
        url: "https://v.redd.it/z5k5iawcelkf1/DASH_480.mp4?source=fallback",
        width: 720,
        height: 480,
      },
      upvote_ratio: 0.85,
    },
    {
      title: "Interesting GIF showing a 3D effect",
      media: {
        type: "gif",
        url: "https://i.redd.it/hijk5678lmn9.gif",
        width: 720,
        height: 540,
      },
      upvote_ratio: 0.92,
    },
  ],
}


export const Posts: React.FC = () => {
  return (
    <>
      {dummyData.educatinggifs.map((post, index) => (
        <Post key={index} data={post} id={index} />
      ))}
    </>
  )
}
