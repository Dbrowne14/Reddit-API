
import { Banner } from "../features/navigation/NavBanner"
import { Posts } from "../features/posts/Posts"
import { ErrorBoundary } from "react-error-boundary"

function fallback() {
  return <p>Posts not loading!! - Code Break</p>
}

export const App = () => (
  <div className="text-center flex flex-col md:flex-row">
    <aside className="sticky top-0 w-full md:w-1/5 z-20">
      <Banner />
    </aside>
    <main className="flex-1 columns-2 md:columns-3 gap-8 p-4 posts-area">
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