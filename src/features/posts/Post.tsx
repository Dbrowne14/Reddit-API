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
    return <img src={media?.url} height={aspectRatioByHeight(width, height)} width={size} loading="lazy" />
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

  return (
    <div className="visualBundle" id={String(id)} >
      {renderMedia(data.media)}
      <p className="title">{data.title}</p>
      <p className="upvote_score">{data.upvote_ratio * 100}</p>
    </div>
  )
}


/*style={{
      width: aspectRatioByWidth(data?.media?.width?? 400, size),
      height: size
    }}*/