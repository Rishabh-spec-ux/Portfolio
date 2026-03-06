'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Brain, Cpu, GitBranch, Layers } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function About() {
  const specializations = [
    {
      icon: Brain,
      title: 'Perception & Vision',
      description: 'Computer vision, sensor fusion, image segmentation, and real-world sensor integration',
    },
    {
      icon: Zap,
      title: 'Navigation & Control',
      description: 'SLAM, path planning, trajectory tracking, and stable motion control systems',
    },
    {
      icon: Cpu,
      title: 'Simulation & Testing',
      description: 'Gazebo, RViz2, simulation-to-real workflows, and comprehensive validation pipelines',
    },
    {
      icon: Code2,
      title: 'Software Architecture',
      description: 'ROS 2, nav stack integration, message passing, and scalable robotics middleware',
    },
  ]

  return (
    <section id="about" className="section-container relative">
      <div className="max-w-container mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Building Robots That Think</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl leading-relaxed">
            I'm a robotics engineer passionate about autonomous systems. I specialize in bridging the gap between simulation and reality—taking algorithms from the lab to robots in the field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column: Focus Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {specializations.map((spec, index) => {
              const Icon = spec.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-lg p-6 hover:border-space-500 transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-space-400 group-hover:text-neon-cyan transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark-50 mb-2">{spec.title}</h3>
                      <p className="text-dark-400 text-sm leading-relaxed">{spec.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right Column: Key Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-lg p-8">
              <p className="text-dark-400 text-sm mb-4">EDUCATION</p>
              <h3 className="text-2xl font-bold text-dark-50 mb-2">B.Sc. Robotics Engineering</h3>
              <p className="text-space-300">Technische Hochschule Würzburg-Schweinfurt (THWS), Germany</p>
            </div>

            <div className="glass rounded-lg p-8">
              <p className="text-dark-400 text-sm mb-4">CURRENT FOCUS</p>
              <h3 className="text-2xl font-bold text-dark-50 mb-2">Autonomous Robotics</h3>
              <p className="text-space-300">Building intelligent systems that perceive, navigate, and act in complex environments.</p>
            </div>

            <div className="glass rounded-lg p-8">
              <p className="text-dark-400 text-sm mb-4">MISSION</p>
              <h3 className="text-2xl font-bold text-dark-50 mb-2">Real-World Impact</h3>
              <p className="text-space-300">Transforming cutting-edge robotics research into practical, deployable autonomous systems.</p>
            </div>
          </motion.div>
        </div>

        {/* Current Status */}
        <motion.div
          className="glass rounded-lg p-8 border-l-2 border-neon-cyan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 animate-pulse" />
            <div>
              <p className="text-dark-400 text-sm mb-2">CURRENTLY WORKING ON</p>
              <p className="text-xl font-semibold text-dark-50">
                Space Rover Project — Building an autonomous rover with advanced perception, navigation, and control systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
