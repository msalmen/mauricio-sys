import RetroBackground from './RetroBackground'
import DeviceFrame from './DeviceFrame'

export default function LayoutWrapper({ children }) {
  return (
    <>
      <RetroBackground />
      <div className="min-h-screen flex items-center justify-center p-4">
        <DeviceFrame>{children}</DeviceFrame>
      </div>
    </>
  )
}
