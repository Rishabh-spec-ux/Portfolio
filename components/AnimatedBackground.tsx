'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(10, 10, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = `rgba(107, 77, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-40"
      />
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/20 to-dark-950" />
        
        {/* Animated gradient blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-space-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"
          style={{
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"
          style={{
            animation: 'float 10s ease-in-out infinite 2s',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-slow"
          style={{
            animation: 'float 12s ease-in-out infinite 4s',
          }}
        />
      </motion.div>
    </>
  )
}
