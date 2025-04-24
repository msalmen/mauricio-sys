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
  return (
    <div className="border border-primary p-4 rounded text-sm bg-black/90 w-full max-w-xs mx-auto">
      <p className="mb-2 text-secondary">NAV CONSOLE:</p>
      <ul className="flex flex-col gap-2">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.path}
              className="underline hover:text-glitch"
            >
              {'[>]'} {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
