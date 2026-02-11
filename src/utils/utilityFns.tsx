import type { Media } from "../types/types"

export const renderMedia = (media: Media | null) => {
  if (!media) return null

  const { width, height, type, url } = media
  const size = 400

  const aspectRatioByHeight = (width: number, height: number) => {
    return size * (height / width)
  }

  // Calculate the height based on aspect ratio
  const calculatedHeight = aspectRatioByHeight(width, height)

  // Wrapper div for styling
  return (
    <div className="overflow-hidden w-full max-w-full  rounded-4xl">
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

export const formatSubCount = (subcount: number) => {
  if (subcount >= 1_000_000) {
    return (subcount / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m"
  }
  if (subcount >= 1000) {
    return (subcount / 1000).toFixed(1).replace(/\.0$/, "") + "k"
  }
  return subcount.toString()
}