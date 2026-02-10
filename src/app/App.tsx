
import { Banner } from "../features/navigation/NavBanner"
import { Posts } from "../features/posts/Posts"
import { ErrorBoundary } from "react-error-boundary"

function fallback() {
  return <p>Posts not loading!! - Code Break</p>
}

export const App = () => (
  <div className="text-center grid grid-rows-[13rem_10fr] sm:grid-cols-[1fr_10fr]">
    <aside className="sticky top-0">
      <Banner />
    </aside>
    <main className="columns-2 gap-8 p-4 posts-area sm:columns-3">
      <ErrorBoundary FallbackComponent={fallback}>
        <Posts />
      </ErrorBoundary>
    </main>
  </div>
)

/*   .posts-area {
    column-count: 3;
    column-gap: 2rem; 
    padding: 2rem;
  } 
*/