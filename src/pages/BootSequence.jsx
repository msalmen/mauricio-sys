import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import DeviceShell from '../components/visual/DeviceShell'
import PageWrapper from '../components/layout/PageWrapper'

const { lines, continue: continueLabel } = pagesContent.bootSequence

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState([])
  const [loading, setLoading] = useState(false)
  const [ready, setReady] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[i]])
      i++
      if (i >= lines.length) {
        clearInterval(interval)
        setTimeout(() => {
          setLoading(true)
        }, 1000)
      }
    }, 600)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (loading && e.key === 'Enter') {
        setReady(true)
        navigate('/story/profile')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [loading, navigate])

  return (
    <DeviceShell>
      <PageWrapper withStartup>
        {visibleLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        {loading && (
          <button
            className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
            onClick={() => {
              setReady(true)
              navigate('/story/profile')
            }}
          >
            {continueLabel}
          </button>
        )}
      </PageWrapper>
    </DeviceShell>
  )
}
