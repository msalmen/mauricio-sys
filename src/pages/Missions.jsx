import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { pagesContent } from '../content/pagesContent'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import ConsoleNav from '../components/ConsoleNav'

const { title, projects, continue: continueLabel } = pagesContent.missions

export default function Missions() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(null)

  return (
    <LayoutWrapper>
      <div className="font-crt text-primary text-xl max-w-screen-md w-full relative">
        <ConsoleNav />

        <p>{title}</p>

        {projects.map((p, i) => (
          <div key={i} className="mt-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="underline"
            >
              [📁] {p.name}
            </button>
            {open === i && (
              <ul className="ml-4 mt-2 list-disc text-secondary">
                {p.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <button
          className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
          onClick={() => navigate('/contact')}
        >
          {continueLabel}
        </button>
      </div>
    </LayoutWrapper>
  )
}

