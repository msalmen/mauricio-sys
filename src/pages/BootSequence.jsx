import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ConsoleNav from '../components/ConsoleNav'
import { pagesContent } from '../content/pagesContent'

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
    <div className="p-8 font-crt text-primary bg-background text-xl min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black border-2 border-primary shadow-md rounded-md p-6 w-full max-w-screen-md relative">
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
    </div>
  )
}

