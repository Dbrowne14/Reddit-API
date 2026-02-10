import { Bucket } from "./bucket/Bucket"
import { NightMode } from "./extraFeatures/NightMode"

export const Banner: React.FC = () => {
  const subRedditList = [
    "PixelArt",
    "ImaginaryLandscapes",
    "ImaginaryArchitecture",
    "EarthPorn",
    "CityPorn",
  ]

  return (
    <div className="nav">
      <div className="banner">
        <h1>r/GifGallery</h1>
        {subRedditList.map((subreddit, index) => {
          return <Bucket key={index} bucketName={subreddit} />
        })}
      </div>
      <div className="extraFeatures">
        <h1>New Features</h1>
        <NightMode/>
      </div>
    </div>
  )
}
