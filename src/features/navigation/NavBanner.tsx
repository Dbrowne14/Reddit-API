import { Bucket } from "./bucket/Bucket"
import { useAppSelector } from "../../app/hooks"

export const Banner: React.FC = () => {
  const subRedditList = [
    "PixelArt",
    "ImaginaryLandscapes",
    "ImaginaryArchitecture",
    "EarthPorn",
    "CityPorn",
  ]

  const selectedBucket = useAppSelector(state => state.bucket.selectedBucket)

  return (
    <div className="w-full">
      <div className="w-full pt-1 bg-(--bg-custom) sm:border border-white rounded-2xl p-4">
        <h1 className="text-white [--webkit-text-fill-color:var(--color-white-500)]">
          r/GifGallery
        </h1>
        <div className="w-full flex flex-row sm:flex-col">
          {subRedditList.map((subreddit, index) => {
            return <Bucket key={index} bucketName={subreddit} />
          })}
        </div>
        <div className="flex items-center justify-center w-full sm:hidden my-2 bg-[rgb(56,31,71)] rounded-2xl">
          <p className="text-2xl text-[rgb(197,182,228)]">{`r/${selectedBucket}`}</p>
        </div>
      </div>
    </div>
  )
}
