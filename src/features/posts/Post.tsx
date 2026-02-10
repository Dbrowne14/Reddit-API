import { _ } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js"
import { Post as PostType } from "../../types/types"
import type { Media } from "../../types/types"

interface PostProps {
  data: PostType
  id: number
}

const size = 400

const aspectRatioByHeight = (width: number, height: number) => {
  return size * (height / width)
}

const renderMedia = (media: Media | null) => {
  if (!media) return null

  const { width, height, type, url } = media

  // Calculate the height based on aspect ratio
  const calculatedHeight = aspectRatioByHeight(width, height)

  // Wrapper div for styling
  return (
    <div className="overflow-hidden w-full max-w-full hover:scale-105 transition-transform duration-200 rounded-4xl">
      {type === "gif" && (
        <img
          src={url}
          width={size}
          height={calculatedHeight}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      )}
    </div>
  )
}

export const Post = ({ data, id }: PostProps) => {
  const upvoteRatio = data.upvote_ratio * 100
  const upvoteRatioColor = (
    number: number,
    color1: string,
    color2: string,
    color3: string,
  ) => {
    if (number > 69 && number < 80) {
      return color1
    } else if (number > 79 && number < 90) {
      return color2
    } else {
      return color3
    }
  }
  return (
    <div className="rounded-2xl" id={String(id)}>
      {renderMedia(data.media)}
      <div className="w-[90%] inline-flex items-center justify-between">
        <p>{data.title}</p>
        <div className="flex items-center justify-center rounded-full w-12 h-12"> 
          <p
            className="text-[1.4rem] font-bold p-2 rounded-full w-full"
            style={{
              color: upvoteRatioColor(
                upvoteRatio,
                "orange",
                "darkgoldenrod",
                "seagreen",
              ),
              backgroundColor: upvoteRatioColor(
                upvoteRatio,
                "peru",
                "lightgoldenrodyellow",
                "lightgreen",
              ),
            }}
          >
            {upvoteRatio}
          </p>
        </div>
      </div>
    </div>
  )
}
