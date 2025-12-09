import { useAppDispatch } from "../../app/hooks"
import { setBucket } from "./bucketSlice"

export const Banner: React.FC = () => {
  const dispatch = useAppDispatch()

  const subRedditList = [
    "educationalgifs",
    "perfectloops",
    "Cinemagraphs",
    "mechanical_gifs",
  ]

  return (
    <div className="banner">
      <h1>Motional</h1>
      <ul>
        {subRedditList.map((subreddit, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  dispatch(setBucket(subreddit))
                }}
                key={index}
              >
                {`r/${subreddit}`}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
