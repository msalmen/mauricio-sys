import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ConsoleNav from '../components/ConsoleNav'
import { pagesContent } from '../content/pagesContent'

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
    <div className="p-8 font-crt text-primary bg-background text-xl min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black border-2 border-primary shadow-md rounded-md p-6 w-full max-w-screen-md relative">
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
      </div>
    </div>
  )
}
