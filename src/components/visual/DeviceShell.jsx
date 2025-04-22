export default function DeviceShell({ children }) {
  return (
    <div className="relative z-0 min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="relative w-full max-w-[420px] aspect-[9/16] rounded-[30px] border-[6px] border-primary bg-black overflow-hidden flex flex-col justify-center">
        {children}
      </div>
    </div>
  )
}
