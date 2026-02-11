import { Bucket } from "./bucket/Bucket"

export const Banner: React.FC = () => {
  const subRedditList = [
    "PixelArt",
    "ImaginaryLandscapes",
    "EarthPorn",
       "ImaginaryArchitecture",
    "CityPorn",
  ]


  return (
    <div className="w-full">
      <div className="w-full pt-1  bg-(--bg-nav) border-b-12 border-b-(--bg-custom)  sm:border-none sm:rounded-2xl sm:px-4">
        <h1 className="text-[2rem]">
          r/GifGallery
        </h1>
        <div className="w-full flex flex-row sm:flex-col pt-2">
          {subRedditList.map((subreddit, index) => {
            return <Bucket key={index} bucketName={subreddit} />
          })}
        </div>
      </div>
    </div>
  )
}

/*         <div className="flex items-center justify-center w-full sm:hidden my-2 bg-[rgb(56,31,71)] border-b-black rounded-bl-2xl rounded-br-2xl">
          <p className="text-2xl text-[rgb(197,182,228)]">{`r/${selectedBucket}`}</p>
        </div> */
