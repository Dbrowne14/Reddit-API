import { Bucket } from "./Bucket"
import './banner.css'

export const Banner: React.FC = () => {

  const subRedditList = [
    "educationalgifs",
    "perfectloops",
    "Cinemagraphs",
    "mechanical_gifs",
    //"gifsthatkeepongiving",
  ]

  return (
    <div className="banner">
      <h1>r/GifGallery</h1>
        {subRedditList.map((subreddit, index) => {
          return (
            <Bucket key={index} bucketName={subreddit} />
          )
        })}
    </div>
  )
}
