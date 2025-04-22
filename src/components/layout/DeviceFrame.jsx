export default function DeviceFrame({ children }) {
    return (
      <div className="relative border-[3px] border-primary rounded-2xl shadow-2xl bg-black p-0 w-full max-w-[768px] h-[640px] overflow-hidden flex flex-col">
        {children}
      </div>
    )
  }