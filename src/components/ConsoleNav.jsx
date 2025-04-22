import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'core_identity.dat', path: '/story/profile' },
  { label: 'skill_modules.cfg', path: '/story/skills' },
  { label: 'exp_log.fdr', path: '/story/experience' },
  { label: 'missions/', path: '/missions' },
  { label: 'uplink_channel.exe', path: '/contact' },
  { label: 'unlock_debug', path: '/unlock_debug' }
]

export default function ConsoleNav() {
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
    <div className="relative w-full flex justify-end">
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
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50">
          <div
            ref={navRef}
            className="relative bg-black text-primary border border-primary p-4 font-crt w-full max-w-xs shadow-lg rounded-md"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-secondary text-xl font-bold hover:text-glitch"
              aria-label="Close console"
            >
              X
            </button>

            <p className="mb-2 text-secondary">NAV CONSOLE:</p>
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className="underline hover:text-glitch"
                  >
                    {'[>]'} {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

