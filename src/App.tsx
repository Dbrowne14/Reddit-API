import "./App.css"
import { Banner } from "./features/navigation/Banner"
import { Posts } from "./features/posts/Posts"
import { ErrorBoundary } from "react-error-boundary"

function fallback () {
return (
  (<p>Posts not loading!! - Code Break</p>)
  )
}

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Banner />
      <ErrorBoundary FallbackComponent={fallback}>
        <Posts />
      </ErrorBoundary>
    </header>
  </div>
)
