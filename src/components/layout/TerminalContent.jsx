export default function TerminalContent({ children }) {
  return (
    <div className="font-crt text-primary text-xl w-full h-full overflow-y-auto p-6 relative flex flex-col">
      {children}
    </div>
  )
}
