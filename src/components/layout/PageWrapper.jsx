import { useEffect, useState } from 'react'
import StartupEffect from '../visual/StartupEffect'

export default function PageWrapper({ children, withStartup = false, startupType = 'crt', startupDuration = 700 }) {
  const [showStartup, setShowStartup] = useState(false)

  useEffect(() => {
    if (withStartup && !sessionStorage.getItem('startupEffectShown')) {
      setShowStartup(true)
      sessionStorage.setItem('startupEffectShown', 'true')

      const timeout = setTimeout(() => {
        setShowStartup(false)
      }, startupDuration)

      return () => clearTimeout(timeout)
    }
  }, [withStartup, startupDuration])

  return (
    <>
      {showStartup && <StartupEffect type={startupType} duration={startupDuration} />}
      {children}
    </>
  )
}
