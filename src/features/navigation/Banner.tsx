
export const Banner: React.FC = () => {
  
  const subRedditList = [
  "educationalgifs",
  "dataisbeautiful",
  "coolguides",
  "mechanical_gifs",
  ]

  return (
    <div className="banner">
      <h1>Motional</h1>
      <ul>
        {subRedditList.map((subreddit, index) => {
          return(
            <div>
              <li key={index}>
                <button>{`r/${subreddit}`}</button>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
