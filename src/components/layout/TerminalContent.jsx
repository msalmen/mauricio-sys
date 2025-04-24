import ConsoleNav from '../ConsoleNav'

export default function TerminalContent({ children }) {
  return (
    <div className="relative z-20 bg-black bg-opacity-95 w-full h-full overflow-y-auto flex flex-col justify-start p-6 font-crt text-primary text-xl rounded-[12px]">
      <ConsoleNav />
      {children}
    </div>
  )
}
