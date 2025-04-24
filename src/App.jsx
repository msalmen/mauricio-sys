import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import BootSequence from './pages/BootSequence'
import CoreIdentity from './pages/CoreIdentity'
import SkillModules from './pages/SkillModules'
import ExpLog from './pages/ExpLog'
import Missions from './pages/Missions'
import UplinkChannel from './pages/UplinkChannel'
import UnlockDebug from './pages/UnlockDebug'
import StartupEffect from './components/visual/StartupEffect'

export default function App() {
  const [showStartupEffect, setShowStartupEffect] = useState(false)

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('startupEffectShown')
    if (!alreadySeen) {
      setShowStartupEffect(true)
      sessionStorage.setItem('startupEffectShown', 'true')
    }
  }, [])

  return (
    <>
      {showStartupEffect && <StartupEffect type="crt" duration={700} />}
      
      <Routes>
        <Route path="/" element={<BootSequence />} />
        <Route path="/story/profile" element={<CoreIdentity />} />
        <Route path="/story/skills" element={<SkillModules />} />
        <Route path="/story/experience" element={<ExpLog />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/contact" element={<UplinkChannel />} />
        <Route path="/unlock_debug" element={<UnlockDebug />} />
      </Routes>
    </>
  )
}
