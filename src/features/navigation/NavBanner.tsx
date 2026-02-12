import { useScrollStatus } from "../../hooks/customHooks"
import { Bucket } from "./bucket/Bucket"

export const Banner: React.FC = () => {
  const subRedditList = [
    "PixelArt",
    "ImaginaryLandscapes",
    "EarthPorn",
    "ImaginaryArchitecture",
    "CityPorn",
  ]

  const hidden = useScrollStatus(50)

  return (
    <div className="w-full">
      <div className="w-full pt-1  bg-bgNav border-b-12 border-b-bgCustom  md:border-none md:rounded-2xl md:px-4">
        <h1 className={`text-[clamp(1.8rem,4vw,4rem)] transition-[max-height,margin,padding] duration-300 ease-in-out ${hidden ? "max-h-0 m-0 p-0 opacity-0" : "max-h-40 p-2 opacity-100"}`}>r/GifGallery</h1>
        <div className="w-full flex flex-row md:flex-col pt-4">
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
