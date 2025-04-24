export default function TerminalContent({ children }) {
  return (
    <div className="text-green-500 text-xl w-full h-full overflow-y-auto px-6 py-8">
      {children}
    </div>
  )
}
