import DeviceShell from './DeviceShell'
import AsciiStars from './AsciiStars'
import CrtOverlay from './CrtOverlay'
import LayoutWrapper from '../layout/LayoutWrapper'

export default function VisualSceneWrapper({ children }) {
  return (
    <DeviceShell>
      {/* Fondo de estrellas */}
      <AsciiStars />

      {/* Contenido principal */}
      <LayoutWrapper>
        {children}
      </LayoutWrapper>

      {/* Overlay CRT superpuesto al contenido */}
      <CrtOverlay />
    </DeviceShell>
  )
}

