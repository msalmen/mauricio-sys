import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import DeviceShell from '../components/visual/DeviceShell'
import PageWrapper from '../components/layout/PageWrapper'

const { title, continue: continueLabel, experiences } = pagesContent.expLog

export default function ExpLog() {
  const navigate = useNavigate()

  return (
    <DeviceShell>
      <PageWrapper>
        <p>{title}</p>

        <div className="mt-4 flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <div key={i} className="border border-primary p-4 rounded">
              <p className="text-glitch font-bold">
                {exp.year} — {exp.title}
              </p>
              <ul className="mt-2 list-disc list-inside text-sm text-secondary">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
          onClick={() => navigate('/missions')}
        >
          {continueLabel}
        </button>
      </PageWrapper>
    </DeviceShell>
  )
}
