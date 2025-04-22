export default function DeviceFrame({ children }) {
    return (
      <div className="relative border-4 border-primary rounded-2xl shadow-2xl p-2 md:p-6 bg-black">
        {children}
      </div>
    )
  }
  