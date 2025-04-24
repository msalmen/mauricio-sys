import { pagesContent } from '../content/pagesContent'
import DeviceShell from '../components/visual/DeviceShell'
import PageWrapper from '../components/layout/PageWrapper'

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
    <DeviceShell>
      <PageWrapper>
        <p>{title}</p>
        <p>{status}</p>

        <div className="mt-4 text-secondary">
          {stats.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </div>

        <p className="mt-6">{messageIntro}</p>
        <p className="text-glitch mt-2">"{messageText}"</p>

        <p className="mt-6">{ending}</p>
      </PageWrapper>
    </DeviceShell>
  )
}
