'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Hero() {
  const techTags = ['ROS 2', 'Nav2', 'Perception', 'Control', 'Autonomy', 'Simulation']

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-8"
          >
            <div className="tech-badge">
              <Sparkles size={16} />
              <span>Building Autonomous Systems</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-dark-50 mb-2">Engineering</span>
            <span className="text-gradient block">Intelligent Autonomous Systems</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Robotics software engineer specializing in perception, navigation, control, and autonomous system integration. Bringing robots to life through elegant architecture and precise engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="btn-primary group"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(107, 77, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Tech Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {techTags.map((tag, index) => (
              <motion.span
                key={tag}
                className="text-sm px-4 py-2 rounded-full bg-dark-800 border border-dark-600 text-dark-200"
                whileHover={{ borderColor: '#b026ff', color: '#00f0ff' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* End section */}
    </section>
  )
}
