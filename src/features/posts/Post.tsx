import { _ } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js"
import { Post as PostType } from "../../types/types"
import type { Media } from "../../types/types"
import "./post.css"

interface PostProps {
  data: PostType
  id: number
}

const size = 400

const aspectRatioByHeight = (width: number, height: number) => {
  return size * (height / width)
}

const renderMedia = (media: Media | null) => {
  if (!media) {
    return null
  }

  const { width, height, type } = media

  if (type === "gif") {
    return (
      <img
        src={media?.url}
        height={aspectRatioByHeight(width, height)}
        width={size}
        loading="lazy"
      />
    )
  }
  if (type === "video") {
    return (
      <video
        src={media?.url}
        width={size}
        height={aspectRatioByHeight(width, height)}
        playsInline
        muted
        controls
        preload="none"
      />
    )
  }
}

export const Post = ({ data, id }: PostProps) => {
  const upvoteRatio = data.upvote_ratio * 100;
  const upvoteRatioColor = (number: number) => {
    if(number > 69 && number < 80) {
      return "orange"
    } else if (number > 79 && number < 90) {
      return "darkgoldenrod"
    } else {
      return "mediumseagreen"
    }
  }
  return (
    <div className="visualBundle" id={String(id)}>
      {renderMedia(data.media)}
      <div className="visualInfo">
        <p className="title">{data.title}</p>
        <p className="upvote_score" style={{color: upvoteRatioColor(upvoteRatio) }}>{upvoteRatio}</p>
      </div>
    </div>
  )
}
