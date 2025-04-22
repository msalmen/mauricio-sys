import ConsoleNav from '../components/ConsoleNav'
import { pagesContent } from '../content/pagesContent'

const { title, status, stats, messageIntro, messageText, ending } = pagesContent.unlockDebug

export default function UnlockDebug() {
  return (
    <div className="p-8 font-crt text-primary bg-background text-xl min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black border-2 border-primary shadow-md rounded-md p-6 w-full max-w-screen-md relative">
        <ConsoleNav />

        <p>{title}</p>
        <p>{status}</p>

        <div className="mt-4 text-secondary">
          {stats.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <p className="mt-6">{messageIntro}</p>
        <p className="text-glitch mt-2">"{messageText}"</p>

        <p className="mt-8">{ending}</p>
      </div>
    </div>
  )
}
