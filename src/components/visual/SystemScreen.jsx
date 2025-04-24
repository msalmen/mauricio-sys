import AsciiStars from './AsciiStars'
import CrtOverlay from './CrtOverlay'
import WindowFrame from '../layout/WindowFrame'
import WindowContent from '../layout/WindowContent'

export default function SystemScreen({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Fondo espacial */}
      <AsciiStars />

      {/* Efecto de encendido CRT */}
      <div className="crt-flash-effect" />

      {/* Contenedor central del sistema operativo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <WindowFrame>
          <WindowContent>
            {children}
          </WindowContent>
        </WindowFrame>
      </div>

      {/* Overlay visual CRT */}
      <CrtOverlay />
    </div>
  )
}
