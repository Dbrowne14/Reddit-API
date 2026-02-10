import { Bucket } from "./bucket/Bucket"
import { NightMode } from "./extraFeatures/NightMode"
import { Filter } from "./extraFeatures/Filter"
import "./navBanner.css"

export const Banner: React.FC = () => {
  const subRedditList = [
    "PixelArt",
    "perfectloops",
    "Cinemagraphs",
    "mechanical_gifs",
    "gifsthatkeepongiving",
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
        <Filter />
        <NightMode/>
      </div>
    </div>
  )
}
