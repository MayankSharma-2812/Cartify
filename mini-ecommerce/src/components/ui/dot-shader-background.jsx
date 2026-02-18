import { useMemo, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

export const DotScreenShader = () => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  const getThemeColors = () => {
    switch (theme) {
      case 'dark':
        return {
          dotColor: '#FFFFFF',
          bgColor: '#121212',
          dotOpacity: 0.025
        }
      case 'light':
        return {
          dotColor: '#e1e1e1',
          bgColor: '#F4F5F5',
          dotOpacity: 0.15
        }
      default:
        return {
          dotColor: '#FFFFFF',
          bgColor: '#121212',
          dotOpacity: 0.05
        }
    }
  }

  const themeColors = getThemeColors()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawDots = () => {
      ctx.fillStyle = themeColors.bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gridSize = 50
      const dotSize = 2
      const spacing = Math.max(canvas.width, canvas.height) / gridSize

      ctx.fillStyle = themeColors.dotColor

      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          const posX = x * spacing + spacing / 2
          const posY = y * spacing + spacing / 2

          // Animate dot opacity
          const distance = Math.sqrt(Math.pow(posX - canvas.width / 2, 2) + Math.pow(posY - canvas.height / 2, 2))
          const maxDistance = Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2))
          const normalizedDistance = distance / maxDistance

          const wave = Math.sin(time * 2 + normalizedDistance * 10) * 0.5
          const opacity = themeColors.dotOpacity * (1 + wave * 0.5)

          ctx.globalAlpha = Math.max(0, Math.min(1, opacity))

          ctx.beginPath()
          ctx.arc(posX, posY, dotSize * (1 + wave * 0.3), 0, Math.PI * 2)
          ctx.fill()
        }
      }

      time += 0.01
      animationId = requestAnimationFrame(drawDots)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    drawDots()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [themeColors])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: themeColors.bgColor }}
    />
  )
}
