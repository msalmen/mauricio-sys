import { Link } from 'react-router-dom'

export default function NavOverlay({ links, onClose }) {
  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50">
      <div className="relative bg-black text-primary border-2 border-primary p-4 font-crt w-full max-w-xs shadow-lg rounded-md">
        <button
          onClick={onClose}
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
                onClick={onClose}
                className="underline hover:text-glitch"
              >
                {'[>]'} {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
