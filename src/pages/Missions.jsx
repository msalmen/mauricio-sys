import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ConsoleNav from '../components/ConsoleNav'

const projects = [
  {
    name: 'TEPY App',
    details: [
      'Collaborated with devs and PMs in a mobile health app',
      'Tested critical paths and helped improve UX',
      'Ensured data flows and event logging across screens'
    ]
  },
  {
    name: 'Telemaskotas',
    details: [
      'Designed test plans and documented bugs',
      'Provided feedback that improved platform stability',
      'Worked remotely with startup founders'
    ]
  }
]

export default function Missions() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(null)

  return (
    <div className="p-8 font-crt text-primary bg-background text-xl min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black border-2 border-primary shadow-md rounded-md p-6 w-full max-w-screen-md relative">
        <ConsoleNav />

        <p>{'>'} OPEN DIRECTORY: /missions/</p>

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
          {'>>'} CONTINUE TO MODULE: UPLINK_CHANNEL.EXE
        </button>
      </div>
    </div>
  )
}
