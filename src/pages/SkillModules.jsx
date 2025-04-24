import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import DeviceShell from '../components/visual/DeviceShell'
import PageWrapper from '../components/layout/PageWrapper'

const { title, continue: continueLabel, skills } = pagesContent.skillModules

export default function SkillModules() {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expanded, setExpanded] = useState([]) // índices expandidos
  const navigate = useNavigate()

  // ✅ FIX: evita que se sobre-escriba el estado después del último render
  useEffect(() => {
    if (revealedCount < skills.length) {
      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [revealedCount])

  const handleToggle = (i) => {
    if (!expanded.includes(i)) {
      setExpanded([...expanded, i])
      setTimeout(() => {
        const el = document.getElementById(`skill-${i}`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }

  const allModulesRevealed = revealedCount === skills.length

  return (
    <DeviceShell>
      <PageWrapper>
        <p>{title}</p>

        <div className="mt-4 flex flex-col gap-2">
          {skills.slice(0, revealedCount).map((skill, i) => {
            const isOpen = expanded.includes(i)

            return (
              <div
                key={i}
                id={`skill-${i}`}
                className="cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                <p className={`font-crt ${isOpen ? 'text-primary' : 'text-secondary'}`}>
                  {isOpen ? '[v]' : '[>]'} {skill.name}
                </p>

                {isOpen && (
                  <ul className="ml-6 mt-1 text-sm text-secondary list-disc list-inside">
                    {skill.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        {allModulesRevealed && (
          <button
            className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
            onClick={() => navigate('/story/experience')}
          >
            {continueLabel}
          </button>
        )}
      </PageWrapper>
    </DeviceShell>
  )
}
