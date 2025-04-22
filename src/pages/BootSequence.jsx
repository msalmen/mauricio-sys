import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import ConsoleNav from '../components/ConsoleNav'

const { lines, continue: continueLabel } = pagesContent.bootSequence

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setVisibleLines(prev => [...prev, lines[i]])
      i++
      if (i >= lines.length) {
        clearInterval(interval)
        setTimeout(() => {
          setLoading(true)
        }, 1000)
      }
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <LayoutWrapper>
      <div className="font-crt text-primary text-xl max-w-screen-md w-full relative">
        <ConsoleNav />

        {visibleLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        {loading && (
          <>
            <div className="w-full bg-secondary h-4 mt-6 overflow-hidden rounded">
              <div className="bg-primary h-full animate-fill"></div>
            </div>

            <button
              className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
              onClick={() => navigate('/story/profile')}
            >
              {continueLabel}
            </button>
          </>
        )}
      </div>
    </LayoutWrapper>
  )
}
