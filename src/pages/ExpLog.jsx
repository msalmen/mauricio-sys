import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import ConsoleNav from '../components/ConsoleNav'
import TerminalContent from '../components/layout/TerminalContent'
import VisualSceneWrapper from '../components/visual/VisualSceneWrapper'

const { title, experiences, continue: continueLabel } = pagesContent.expLog

export default function ExpLog() {
  const navigate = useNavigate()

  return (
    <VisualSceneWrapper>
      <TerminalContent>
        <ConsoleNav />

        <p>{title}</p>

        {experiences.map((exp, i) => (
          <div key={i} className="mt-6">
            <p className="text-secondary">{exp.year}</p>
            <p className="font-bold">{exp.title}</p>
            <ul className="ml-4 mt-2 list-disc text-secondary">
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}

        <button
          className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
          onClick={() => navigate('/missions')}
        >
          {continueLabel}
        </button>
      </TerminalContent>
    </VisualSceneWrapper>
  )
}
