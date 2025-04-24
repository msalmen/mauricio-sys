import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import DeviceShell from '../components/visual/DeviceShell'

const { title, scanTitle, lines, continue: continueLabel } = pagesContent.coreIdentity

export default function CoreIdentity() {
  const [scanning, setScanning] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScanning(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <DeviceShell>
      <p>{title}</p>
      <p>{scanTitle}</p>

      {scanning ? (
        <div className="w-full bg-secondary h-4 mt-6 overflow-hidden rounded">
          <div className="bg-primary h-full animate-fill"></div>
        </div>
      ) : (
        <>
          {lines.map((line, index) => (
            <p key={`${index}-${line}`} className="break-words whitespace-pre-line">
              {line}
            </p>
          ))}

          <button
            className="mt-8 border border-primary px-4 py-2 hover:animate-pulse"
            onClick={() => navigate('/story/skills')}
          >
            {continueLabel}
          </button>
        </>
      )}
    </DeviceShell>
  )
}
