import { useEffect, useState } from "react"

export const useScrollStatus = (scrollHeight: number) => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollHeight) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }

    window.addEventListener("scroll", handleScroll,{ passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return hidden
}
