import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import ConsoleNav from '../components/ConsoleNav'
import TerminalContent from '../components/layout/TerminalContent'
import VisualSceneWrapper from '../components/visual/VisualSceneWrapper'

const { title, scanTitle, lines, continue: continueLabel } = pagesContent.coreIdentity

export default function CoreIdentity() {
  const [scanning, setScanning] = useState(true)
  const [visibleLines, setVisibleLines] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      setScanning(false)
      const interval = setInterval(() => {
        setVisibleLines(prev => [...prev, lines[i]])
        i++
        if (i >= lines.length) clearInterval(interval)
      }, 600)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <VisualSceneWrapper>
      <TerminalContent>
        <ConsoleNav />

        <p>{title}</p>
        <p>{scanTitle}</p>

        {scanning && (
          <div className="w-full bg-secondary h-4 mt-6 overflow-hidden rounded">
            <div className="bg-primary h-full animate-fill"></div>
          </div>
        )}

        {!scanning && (
          <>
            {visibleLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            <button
              className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
              onClick={() => navigate('/story/skills')}
            >
              {continueLabel}
            </button>
          </>
        )}
      </TerminalContent>
    </VisualSceneWrapper>
  )
}
