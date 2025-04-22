import { pagesContent } from '../content/pagesContent'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import ConsoleNav from '../components/ConsoleNav'

const {
  title,
  status,
  stats,
  messageIntro,
  messageText,
  ending
} = pagesContent.unlockDebug

export default function UnlockDebug() {
  return (
    <LayoutWrapper>
      <div className="font-crt text-primary text-xl max-w-screen-md w-full relative">
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
    </LayoutWrapper>
  )
}
