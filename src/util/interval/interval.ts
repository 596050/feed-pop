import { useEffect, useRef } from 'react'

export const useInterval = (ms: number, callback: (...args: any[]) => void) => {
  const callbackRef = useRef(callback)
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const controller = new AbortController()
    interval(ms, controller.signal, callbackRef.current)
    return () => controller.abort()
  }, [ms])
}

export function interval(
  ms: number,
  signal: AbortSignal,
  callback: (...args: any[]) => void
) {
  // https://www.youtube.com/watch?v=MCi6AZMkxcU&ab_channel=GoogleChromeDevelopers
  // https://gist.github.com/jakearchibald/cb03f15670817001b1157e62a076fe95
  const start: number = document.timeline.currentTime || 0

  function frame(time: number) {
    if (signal.aborted) return
    callback(time)
    scheduleFrame(time)
  }

  function scheduleFrame(time: number) {
    const elapsed = time - start
    const roundedElapsed = Math.round(elapsed / ms) * ms
    const targetNext = start + roundedElapsed + ms
    const delay = targetNext - performance.now()
    setTimeout(() => requestAnimationFrame(frame), delay)
  }

  scheduleFrame(start)
}
