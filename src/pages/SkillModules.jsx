import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ConsoleNav from '../components/ConsoleNav'

const skills = [
  {
    name: 'Manual Testing',
    status: 'OPERATIONAL',
    details: ['Functional, regression, exploratory', 'Tools: QAse, Trello']
  },
  {
    name: 'API Testing',
    status: 'STABLE',
    details: ['Postman, Charles Proxy, REST']
  },
  {
    name: 'UX Validation',
    status: 'OPERATIONAL',
    details: ['Screenshots, edge cases, feedback']
  },
  {
    name: 'Unity Debugging',
    status: 'EXPERIMENTAL',
    details: ['Unity Editor, UI States, LogCat']
  }
]

export default function SkillModules() {
  const [expanded, setExpanded] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="p-8 font-crt text-primary bg-background text-xl min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black border-2 border-primary shadow-md rounded-md p-6 w-full max-w-screen-md relative">
        <ConsoleNav />

        <p>{'>'} OPENING skill_modules.cfg...</p>

        {skills.map((skill, i) => (
          <div key={i} className="mt-4">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="underline"
            >
              [●] {skill.name}{' '}
              <span className="ml-2 text-secondary">[{skill.status}]</span>
            </button>

            {expanded === i && (
              <ul className="ml-4 mt-2 list-disc text-secondary">
                {skill.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <button
          className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
          onClick={() => navigate('/story/experience')}
        >
          {'>>'} CONTINUE TO MODULE: EXP_LOG.FDR
        </button>
      </div>
    </div>
  )
}
