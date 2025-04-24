import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import DeviceShell from '../components/visual/DeviceShell'

const { title, continue: continueLabel, projects } = pagesContent.missions

export default function Missions() {
  const navigate = useNavigate()

  return (
    <DeviceShell>
      <p>{title}</p>

      <div className="mt-4 flex flex-col gap-4">
        {projects.map((project, i) => (
          <div key={i} className="border border-primary p-4 rounded">
            <p className="text-glitch font-bold">{project.name}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-secondary">
              {project.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
        onClick={() => navigate('/contact')}
      >
        {continueLabel}
      </button>
    </DeviceShell>
  )
}
