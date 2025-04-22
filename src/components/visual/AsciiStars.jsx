import { useEffect, useState } from 'react'

const asciiChars = ['.', '*', '+', 'o']

function randomChar() {
  return asciiChars[Math.floor(Math.random() * asciiChars.length)]
}

function generateStars(count = 50) {
  return Array.from({ length: count }).map(() => ({
    id: crypto.randomUUID(),
    char: randomChar(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 0.5 + 0.75,
    delay: Math.random() * 2,
  }))
}

export default function AsciiStars() {
  const [stars, setStars] = useState(generateStars())

  useEffect(() => {
    const interval = setInterval(() => {
      setStars(generateStars())
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            top: star.top,
            left: star.left,
            transform: `scale(${star.size})`,
            animationDelay: `${star.delay}s`,
          }}
          className="absolute text-primary text-sm animate-star-flicker"
        >
          {star.char}
        </span>
      ))}
    </div>
  )
}
