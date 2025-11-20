import { Post } from "./Post"

export const Posts = () => {  
  const resultsArray = [1, 2, 3, 4, 5]
  return (
    <div className="posts">
      {resultsArray.map((result, index) => (
        <Post key={index} data={result} />
      ))}
    </div>
  )
}
