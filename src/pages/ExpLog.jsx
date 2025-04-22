import { useNavigate } from 'react-router-dom'
import ConsoleNav from '../components/ConsoleNav'
import { pagesContent } from '../content/pagesContent'

const { title, experiences, continue: continueLabel } = pagesContent.expLog

export default function ExpLog() {
  const navigate = useNavigate()

  return (
    <div className="p-8 font-crt text-primary bg-background text-xl min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black border-2 border-primary shadow-md rounded-md p-6 w-full max-w-screen-md relative">
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
      </div>
    </div>
  )
}
