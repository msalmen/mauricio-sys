import { Routes, Route } from 'react-router-dom'
import BootSequence from './pages/BootSequence'
import CoreIdentity from './pages/CoreIdentity'
import SkillModules from './pages/SkillModules'
import ExpLog from './pages/ExpLog'
import Missions from './pages/Missions'
import UplinkChannel from './pages/UplinkChannel'
import UnlockDebug from './pages/UnlockDebug'
import ConsoleNav from './components/ConsoleNav'

export default function App() {
  return (
    <>      
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
