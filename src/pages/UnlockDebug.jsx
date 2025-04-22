import ConsoleNav from '../components/ConsoleNav'

export default function UnlockDebug() {
  return (
    <div className="p-8 font-crt text-primary bg-background text-xl min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black border-2 border-primary shadow-md rounded-md p-6 w-full max-w-screen-md relative">
        <ConsoleNav />

        <p>{'>'} unlock_debug</p>
        <p>{'>'} ADMIN MODE ACTIVATED</p>

        <div className="mt-4 text-secondary">
          <p>- Modules viewed: 6/6</p>
          <p>- Easter eggs found: 1</p>
        </div>

        <p className="mt-6">{'>>'} MESSAGE FROM THE AUTHOR:</p>
        <p className="text-glitch mt-2">
          "If llegaste hasta acá, sos del tipo que explora todo. Eso dice mucho. Contactame 😉"
        </p>

        <p className="mt-8">{'>>'} SYSTEM LOCKED — END OF TRANSMISSION</p>
      </div>
    </div>
  )
}
