import { useEffect, useRef } from 'react'
import styles from './FloatingParticles.module.css'

export default function FloatingParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let cw = canvas.offsetWidth
    let ch = canvas.offsetHeight
    canvas.width = cw
    canvas.height = ch

    const particles = []
    const count = 60

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * cw,
        y: Math.random() * ch,
        size: 4 + Math.random() * 7,
        speedX: -0.25 - Math.random() * 0.4,
        speedY: 0.25 + Math.random() * 0.45,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.018,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.013 + Math.random() * 0.018,
        color: Math.random() > 0.5 ? '#EAD9D5' : '#D8A7AC',
        alpha: 0.35 + Math.random() * 0.45,
        // some are gold dust
        isGold: Math.random() < 0.2,
        r: 1 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2
      })
    }

    function draw(now) {
      ctx.clearRect(0, 0, cw, ch)

      particles.forEach((p, i) => {
        if (p.isGold) {
          p.x += p.speedX * 0.5
          p.y += -0.15 - Math.random() * 0.05
          if (p.y < -10) { p.y = ch + 10; p.x = Math.random() * cw }
          if (p.x < -10) { p.x = cw + 10 }
          const twinkle = 0.3 + 0.5 * (0.5 + 0.5 * Math.sin(now * 0.002 + p.phase))
          ctx.save()
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(198, 164, 106, ${twinkle})`
          ctx.shadowColor = '#C6A46A'
          ctx.shadowBlur = 6
          ctx.fill()
          ctx.restore()
        } else {
          p.x += p.speedX + Math.sin(now * 0.001 + i) * 0.15
          p.y += p.speedY
          p.angle += p.spin
          p.flip += p.flipSpeed
          if (p.y > ch + 20) { p.y = -20; p.x = Math.random() * cw }
          if (p.x < -20) { p.x = cw + 20 }
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.angle)
          ctx.scale(1, 0.4 + 0.6 * Math.abs(Math.cos(p.flip)))
          ctx.globalAlpha = p.alpha
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.moveTo(0, -p.size)
          ctx.bezierCurveTo(p.size, -p.size * 0.8, p.size * 0.9, p.size * 0.8, 0, p.size)
          ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.8, -p.size, -p.size * 0.8, 0, -p.size)
          ctx.fill()
          ctx.restore()
        }
      })

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const handleResize = () => {
      cw = canvas.offsetWidth
      ch = canvas.offsetHeight
      canvas.width = cw
      canvas.height = ch
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
