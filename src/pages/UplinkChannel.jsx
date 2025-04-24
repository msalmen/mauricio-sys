import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import DeviceShell from '../components/visual/DeviceShell'
import PageWrapper from '../components/layout/PageWrapper'

const {
  title,
  namePlaceholder,
  messagePlaceholder,
  transmit,
  confirmation,
  continue: continueLabel
} = pagesContent.uplinkChannel

export default function UplinkChannel() {
  const [form, setForm] = useState({ name: '', message: '' })
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setSent(true)
    }, 500)
  }

  return (
    <DeviceShell>
      <PageWrapper>
        <p>{title}</p>

        <form className="mt-4 flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder={namePlaceholder}
            onChange={handleChange}
            className="bg-black border-b border-primary outline-none p-1"
          />
          <textarea
            name="message"
            placeholder={messagePlaceholder}
            rows="4"
            onChange={handleChange}
            className="bg-black border-b border-primary outline-none p-1 resize-none"
          />
          <button
            type="submit"
            className="border border-primary px-4 py-2 hover:animate-pulse"
          >
            {transmit}
          </button>
        </form>

        {sent && (
          <>
            <p className="mt-4 text-glitch">{confirmation}</p>
            <button
              className="mt-4 border border-primary px-4 py-2 hover:animate-pulse"
              onClick={() => navigate('/unlock_debug')}
            >
              {continueLabel}
            </button>
          </>
        )}
      </PageWrapper>
    </DeviceShell>
  )
}
