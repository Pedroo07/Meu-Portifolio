import { startTransition, useEffect, useEffectEvent, useRef, useState } from 'react'

export function useRotatingText(items, interval = 2600, fadeDuration = 260) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const timeoutRef = useRef(null)

  const rotate = useEffectEvent(() => {
    setVisible(false)

    timeoutRef.current = window.setTimeout(() => {
      startTransition(() => {
        setIndex((currentIndex) => (currentIndex + 1) % items.length)
      })

      setVisible(true)
    }, fadeDuration)
  })

  useEffect(() => {
    if (items.length < 2) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      rotate()
    }, interval)

    return () => {
      window.clearInterval(intervalId)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [fadeDuration, interval, items.length])

  return {
    text: items[index],
    visible,
  }
}
