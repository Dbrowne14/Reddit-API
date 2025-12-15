import { Bucket } from "./bucket/Bucket"
import { NightMode } from "./extraFeatures/NightMode"
import "./navBanner.css"

export const Banner: React.FC = () => {
  const subRedditList = [
    "educationalgifs",
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
        <NightMode/>
      </div>
    </div>
  )
}
