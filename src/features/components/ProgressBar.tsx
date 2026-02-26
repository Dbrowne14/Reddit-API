"use client"

import * as React from "react"
import { Progress } from "../../components/ui/progress"

export function ProgressBar({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = React.useState(10)

  React.useEffect(() => {
    if (!isLoading) {
      setProgress(100) // jump to 100% when data finishes
      return
    }

    setProgress(10) // reset on new load
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev // max 90% until finished
        return prev + Math.random() * 5 // random increment
      })
    }, 300)

    return () => clearInterval(interval)
  }, [isLoading])

  return <Progress value={progress} className="w-[80%] h-4 mx-auto my-4" />
}
