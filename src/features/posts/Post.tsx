import { Post as PostType } from "../../types/types"
import type { Media } from "../../types/types"

interface PostProps {
  data: PostType
  id: number
}

const renderMedia = (media: Media | null) => {
  if (!media) {
    return null
  }

  const { width, height, type } = media
  const aspectRatio = width / height
  const size = 300

  if (type === "gif") {
    return <img src={media?.url} width={size * aspectRatio} height={size} />
  }
  if (type === "video") {
    return (
      <video
        src={media?.url}
        width={size * aspectRatio}
        height={size}
        playsInline
        muted
        controls
      />
    )
  }
}

export const Post = ({ data, id }: PostProps) => {
  return (
    <div className="visualBundle" id={String(id)}>
      {renderMedia(data.media)}
      <p className="title">Returned Data: {data.title}</p>
      <p className="upvote_score">{data.upvote_ratio * 100}</p>
    </div>
  )
}
