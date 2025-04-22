import { pagesContent } from '../content/pagesContent'
import ConsoleNav from '../components/ConsoleNav'
import TerminalContent from '../components/layout/TerminalContent'
import VisualSceneWrapper from '../components/visual/VisualSceneWrapper'

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
    <VisualSceneWrapper>
      <TerminalContent>
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
      </TerminalContent>
    </VisualSceneWrapper>
  )
}
