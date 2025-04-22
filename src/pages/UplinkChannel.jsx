import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesContent } from '../content/pagesContent'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import ConsoleNav from '../components/ConsoleNav'

const {
  title,
  namePlaceholder,
  messagePlaceholder,
  transmit,
  confirmation,
  continue: continueLabel
} = pagesContent.uplinkChannel

export default function UplinkChannel() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', message: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <LayoutWrapper>
      <div className="font-crt text-primary text-xl max-w-screen-md w-full relative">
        <ConsoleNav />

        <p>{title}</p>

        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder={namePlaceholder}
            onChange={handleChange}
            className="bg-black border-b border-primary outline-none p-2 text-primary"
          />
          <textarea
            name="message"
            placeholder={messagePlaceholder}
            onChange={handleChange}
            className="bg-black border border-primary outline-none p-2 h-24 text-primary"
          />
          <button type="submit" className="border border-primary px-4 py-2 hover:animate-pulse">
            {transmit}
          </button>
        </form>

        {sent && (
          <>
            <p className="mt-4">{confirmation}</p>
            <button
              className="mt-4 border border-primary px-4 py-2 hover:animate-pulse"
              onClick={() => navigate('/unlock_debug')}
            >
              {continueLabel}
            </button>
          </>
        )}
      </div>
    </LayoutWrapper>
  )
}
