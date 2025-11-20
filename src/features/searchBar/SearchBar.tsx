import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useState } from "react"

export const SearchBar = () => {
const [input, setInput] = useState("")
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    useAppDispatch() // add in some functionality for a search to be made 
}
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="lets search Reddit"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit"> Search </button>
      </form>
    </div>
  )
}
