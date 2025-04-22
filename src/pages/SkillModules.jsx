import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import ConsoleNav from '../components/ConsoleNav'
import TerminalContent from '../components/layout/TerminalContent'
import VisualSceneWrapper from '../components/visual/VisualSceneWrapper'

const { title, skills, continue: continueLabel } = pagesContent.skillModules

export default function SkillModules() {
  const [expanded, setExpanded] = useState(null)
  const navigate = useNavigate()

  return (
    <VisualSceneWrapper>
      <TerminalContent>
        <ConsoleNav />

        <p>{title}</p>

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
          {continueLabel}
        </button>
      </TerminalContent>
    </VisualSceneWrapper>
  )
}
