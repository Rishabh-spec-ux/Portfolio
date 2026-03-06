'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Workflow() {
  const workflow = [
    {
      step: 1,
      title: 'Perception',
      description: 'Raw sensor inputs (camera, LiDAR, IMU, GNSS) → processed into environmental representation',
      details: ['Computer vision', 'Filter chains', 'Real-time processing'],
      color: 'from-neon-cyan to-space-500',
    },
    {
      step: 2,
      title: 'Localization',
      description: 'Determine exact position and orientation in space using sensor fusion',
      details: ['SLAM algorithms', 'Sensor fusion (IMU+GNSS)', 'Uncertainty estimation'],
      color: 'from-space-500 to-neon-purple',
    },
    {
      step: 3,
      title: 'Mapping',
      description: 'Build spatial representations of the environment for planning',
      details: ['Occupancy grids', 'Cost maps', 'Costmap layers'],
      color: 'from-neon-purple to-space-600',
    },
    {
      step: 4,
      title: 'Planning',
      description: 'Generate optimal collision-free paths to target locations',
      details: ['Path planning', 'Behavioral planning', 'Trajectory generation'],
      color: 'from-space-600 to-neon-pink',
    },
    {
      step: 5,
      title: 'Control',
      description: 'Execute planned motions with stability and precision',
      details: ['PID controllers', 'Trajectory tracking', 'Motor commands'],
      color: 'from-neon-pink to-space-500',
    },
    {
      step: 6,
      title: 'Monitoring',
      description: 'Real-time telemetry, diagnostics, and system health visualization',
      details: ['State monitoring', 'Performance metrics', 'Anomaly detection'],
      color: 'from-space-500 to-neon-cyan',
    },
  ]

  return (
    <section id="workflow" className="section-container relative">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Robotics Engineering Pipeline</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            How I architect autonomous systems: from raw sensor data to intelligent decision-making and hardware control.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-6">
          {workflow.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Desktop Alternating Layout */}
              <div className="hidden md:flex items-center gap-8">
                {index % 2 === 0 ? (
                  <>
                    {/* Left - Content */}
                    <div className="flex-1">
                      <WorkflowCard item={item} />
                    </div>
                    {/* Right - Step Number and Arrow */}
                    <div className="flex-none text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-2xl`}>
                        {item.step}
                      </div>
                      {index < workflow.length - 1 && (
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mt-4"
                        >
                          <ArrowRight size={24} className="text-space-500 transform rotate-90" />
                        </motion.div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left - Step Number and Arrow */}
                    <div className="flex-none text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-2xl`}>
                        {item.step}
                      </div>
                      {index < workflow.length - 1 && (
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mt-4"
                        >
                          <ArrowRight size={24} className="text-space-500 transform rotate-90" />
                        </motion.div>
                      )}
                    </div>
                    {/* Right - Content */}
                    <div className="flex-1">
                      <WorkflowCard item={item} />
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0 flex items-center justify-center text-white font-bold`}>
                    {item.step}
                  </div>
                  <WorkflowCard item={item} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkflowCard({
  item,
}: {
  item: {
    title: string
    description: string
    details: string[]
    color: string
  }
}) {
  return (
    <motion.div
      className="glass rounded-lg p-6 h-full hover:border-white/20 transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <h3 className="text-2xl font-bold text-dark-50 mb-2">{item.title}</h3>
      <p className="text-dark-300 mb-4 leading-relaxed">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.details.map((detail) => (
          <span key={detail} className="text-xs px-3 py-1 rounded-full bg-dark-800 border border-dark-600 text-dark-300">
            {detail}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
