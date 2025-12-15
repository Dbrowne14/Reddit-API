import "./App.css"
import { Banner } from "./features/navigation/NavBanner"
import { Posts } from "./features/posts/Posts"
import { ErrorBoundary } from "react-error-boundary"

function fallback() {
  return <p>Posts not loading!! - Code Break</p>
}

export const App = () => (
  <div className="app">
    <aside className="nav-banner">
      <Banner />
    </aside>
    <main className="posts-area">
      <ErrorBoundary FallbackComponent={fallback}>
        <Posts />
      </ErrorBoundary>
    </main>
  </div>
)
