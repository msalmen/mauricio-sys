export default function TerminalContent({ children }) {
  return (
    <div className="font-crt text-primary text-xl w-full h-full overflow-y-auto pt-6 pr-6 pb-8 pl-6 relative flex flex-col">
      {children}
      <div className="h-6" aria-hidden="true" />
    </div>
  )
}
