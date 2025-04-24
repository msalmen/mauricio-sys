import { useState } from 'react'
import TerminalContent from './TerminalContent'

export default function WindowFrame({ children }) {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="relative z-10 w-[90%] h-[90%] max-w-full max-h-full bg-black rounded-xl border border-primary overflow-hidden shadow-[0_0_30px_#00FF00]/10 flex flex-col animate-window-frame">



      {/* Contenido principal desplazable */}
      <div className="flex-1 overflow-y-auto">
        <TerminalContent>
          {children}
        </TerminalContent>
      </div>
    </div>
  )
}
