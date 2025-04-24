import { useEffect, useState } from 'react'
import clsx from 'clsx'

function StartupEffect({ type = 'crt', duration = 700 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('startupEffectShown')

    if (!alreadySeen) {
      setVisible(true)
      sessionStorage.setItem('startupEffectShown', 'true')

      const timeout = setTimeout(() => setVisible(false), duration)
      return () => clearTimeout(timeout)
    }
  }, [duration])

  if (!visible) return null

  return (
    <div
      className={clsx(
        'absolute inset-0 z-50 pointer-events-none',
        type === 'crt' && 'crt-flash-effect'
      )}
    />
  )
}

export default StartupEffect
