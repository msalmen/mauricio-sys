export default function CrtOverlay() {
  return (
    <div
      className="absolute inset-0 z-50 pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle at center, rgba(0,255,0,0.05) 0%, rgba(0,255,0,0.12) 35%, transparent 80%)',
        mixBlendMode: 'screen'
      }}
    />
  )
}
