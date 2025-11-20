import "./App.css"
import { Quotes } from "./features/quotes/Quotes"
import { Banner } from "./app/components/Banner"
import { SearchBar } from "./features/searchBar/SearchBar"
import { Posts } from "./features/posts/Posts"
import { ResultsNumber } from "./app/components/ResultsNumber"

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Banner />
      <SearchBar />
      <ResultsNumber />
      <Posts />
      <Quotes />
    </header>
  </div>
)
