import { _ } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js"
import { Post as PostType } from "../../types/types"
import { renderMedia } from "../../utils/utilityFns"
import { useEffect, useState, useRef } from "react"

interface PostProps {
  data: PostType
  id: number
}

export const Post = ({ data, id }: PostProps) => {
  const [clicked, setClicked] = useState(false)
  const postRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (postRef.current && !postRef.current.contains(event.target as Node)) {
        setClicked(false)
      }
    }

    if (clicked) document.addEventListener("mousedown", handleClickOutside)
    else document.removeEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [clicked])

  const toggleExpand = () => setClicked(!clicked)

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
    <div
      className={`
        rounded-2xl break-inside-avoid relative cursor-pointer 
        transition-all duration-300 ease-in-out 
        ${clicked ? "scale-110 z-10" : "block"}
      `}
      id={String(id)}
      ref={postRef}
      onClick={toggleExpand}
    >
      {renderMedia(data.media)}
      <div
        className={`absolute bottom-0 left-0 rounded-br-2xl rounded-bl-2xl w-full p-3 items-center justify-between inline-flex bg-[rgba(1,1,1,0.6)] ${clicked ? "opacity-100 shadow-2xl" : "opacity-0"} `}
      >
        <p className="text-reSizing">{data.title}</p>
        <div className="flex items-center justify-center rounded-full w-12 h-12">
          <p
            className="text-reSizing font-bold p-2 rounded-full w-full"
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
