'use client'

import { motion } from 'framer-motion'
import { Rocket, Navigation, Cpu, Eye, AlertCircle, CheckCircle } from 'lucide-react'

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

export default function SpaceRoverProject() {
  const systemComponents = [
    {
      icon: Eye,
      title: 'Perception Pipeline',
      details: ['Deep learning-based object detection', 'Real-time sensor processing', '[Add sensors used]', '[Add vision stack]'],
      color: 'from-neon-cyan to-space-400',
    },
    {
      icon: Navigation,
      title: 'Autonomy Stack',
      details: ['Nav2 path planning integration', 'Autonomous navigation control', '[Add autonomy logic]', 'Mission manager with action clients'],
      color: 'from-neon-purple to-space-600',
    },
    {
      icon: Cpu,
      title: 'Control System',
      details: ['Pure Pursuit trajectory tracking', 'Sensor fusion (IMU + GNSS)', '[Add onboard compute]', 'Motor abstraction layer (C++)'],
      color: 'from-space-500 to-neon-pink',
    },
  ]

  const milestones = [
    { status: 'completed', title: 'System Architecture Design', description: 'Designed modular autonomy stack' },
    { status: 'completed', title: 'Simulation Environment', description: 'Gazebo environment with realistic sensors' },
    { status: 'in-progress', title: 'Perception Integration', description: '[Add current development status]' },
    { status: 'pending', title: 'Real-World Deployment', description: '[Add planned milestones]' },
  ]

  const architectureLayers = [
    'Hardware Layer: Motors, Sensors, Actuators',
    'Communication Layer: CAN, CANopen protocols',
    'Middleware Layer: ROS 2, message passing',
    'Perception Layer: Computer vision, sensor fusion',
    'Planning Layer: Nav2, path planning algorithms',
    'Mission Layer: Task coordination, objectives',
  ]

  return (
    <section id="rover-project" className="section-container relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-dark-800 border border-dark-600">
            <Rocket size={16} className="text-neon-cyan" />
            <span className="text-sm text-space-300">Featured Project</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Space Rover Project</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            An ambitious exploration into autonomous navigation, environmental perception, and robust decision-making in constrained and unknown terrain. Building a rover system that thinks, perceives, and acts independently.
          </p>
        </motion.div>

        {/* Rover Image */}
        <motion.div
          className="mb-20 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative glass rounded-lg p-2 border border-space-500/30">
            <img 
              src="/rover.png" 
              alt="Space Rover" 
              className="w-full h-auto rounded-lg object-cover max-h-96"
            />
          </div>
        </motion.div>

        {/* System Overview */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-dark-50">System Architecture</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {systemComponents.map((component, index) => {
              const Icon = component.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ y: -8 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${component.color} rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur`} />
                  <div className="relative glass rounded-lg p-8 h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${component.color} text-white flex items-center justify-center mb-4`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-dark-50 mb-4">{component.title}</h4>
                    <ul className="space-y-2">
                      {component.details.map((detail, i) => (
                        <li key={i} className="text-sm text-dark-300 flex items-start gap-2">
                          <span className="text-space-400 mt-1">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* System Layers */}
        <motion.div
          className="mb-20 glass rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-dark-50">Stack Architecture</h3>
          <div className="space-y-3">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-space-500 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-space-500 to-neon-purple flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </div>
                <span className="text-dark-200 font-medium">{layer}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Progress */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-dark-50">Development Roadmap</h3>
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const isCompleted = milestone.status === 'completed'
              const isInProgress = milestone.status === 'in-progress'

              return (
                <motion.div
                  key={index}
                  className={`glass rounded-lg p-6 border-l-4 ${
                    isCompleted
                      ? 'border-l-neon-cyan'
                      : isInProgress
                        ? 'border-l-neon-purple'
                        : 'border-l-dark-600'
                  }`}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {isCompleted ? (
                        <CheckCircle size={20} className="text-neon-cyan" />
                      ) : isInProgress ? (
                        <motion.div
                          className="w-5 h-5 rounded-full border-2 border-neon-purple"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-dark-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-dark-50 mb-1">{milestone.title}</h4>
                      <p className="text-dark-400">{milestone.description}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isCompleted
                          ? 'bg-neon-cyan/10 text-neon-cyan'
                          : isInProgress
                            ? 'bg-neon-purple/10 text-neon-purple animate-pulse'
                            : 'bg-dark-800 text-dark-400'
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Key Challenges */}
        <motion.div
          className="glass rounded-lg p-8 border-l-4 border-neon-pink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="text-neon-pink mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-dark-50 mb-4">Engineering Challenges</h3>
              <ul className="space-y-2 text-dark-300">
                <li className="flex items-start gap-2">
                  <span className="text-space-400">•</span>
                  <span>Real-time perception-to-action latency optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-400">•</span>
                  <span>Robust localization in GPS-denied environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-400">•</span>
                  <span>Sensor fusion and uncertainty management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-400">•</span>
                  <span>Simulation-to-reality transfer and validation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
