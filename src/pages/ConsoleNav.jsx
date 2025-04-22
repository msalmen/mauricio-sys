import { useState, useRef, useEffect } from 'react'
import NavOverlay from './NavOverlay'

const defaultLinks = [
  { label: 'core_identity.dat', path: '/story/profile' },
  { label: 'skill_modules.cfg', path: '/story/skills' },
  { label: 'exp_log.fdr', path: '/story/experience' },
  { label: 'missions/', path: '/missions' },
  { label: 'uplink_channel.exe', path: '/contact' },
  { label: 'unlock_debug', path: '/unlock_debug' }
]

export default function ConsoleNav({ links = defaultLinks }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('click', handleOutsideClick)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div className="relative w-full flex justify-end" ref={navRef}>
      <button
        className="glitch-toggle mb-4"
        onClick={(e) => {
          e.stopPropagation()
          setOpen(!open)
        }}
      >
        {'>>'} TOGGLE NAV
      </button>

      {open && (
        <NavOverlay links={links} onClose={() => setOpen(false)} />
      )}
    </div>
  )
}
