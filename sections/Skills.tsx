'use client'

import { motion } from 'framer-motion'
import { Code2, Rss, Eye, Brain, Settings, Package, Network } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-space-600 to-space-700',
      skills: ['C++', 'Python', 'Java', 'JavaScript', 'HTML/CSS', 'TypeScript'],
      description: 'Core languages for robotics software development and web interfaces',
    },
    {
      icon: Rss,
      title: 'Robotics Middleware',
      color: 'from-neon-purple to-space-600',
      skills: ['ROS 2 (Humble, Jazzy)', 'ROS 1', 'Nav2', 'robot_localization', 'Gazebo', 'RViz2'],
      description: 'Industry-standard frameworks for autonomous system development',
    },
    {
      icon: Eye,
      title: 'Perception & Vision',
      color: 'from-neon-blue to-neon-cyan',
      skills: ['Computer Vision', 'Image Segmentation', 'IPM (Inverse Perspective Mapping)', 'Bird\'s Eye View', 'PointCloud2', 'Sensor Fusion'],
      description: 'Environmental understanding and sensor data processing',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      color: 'from-neon-pink to-neon-purple',
      skills: ['Supervised Learning', 'CNNs', 'RNNs', 'Reinforcement Learning', 'Model Deployment'],
      description: 'Deep learning for perception and decision-making systems',
    },
    {
      icon: Settings,
      title: 'Control & Systems',
      color: 'from-space-500 to-neon-cyan',
      skills: ['PID Control', 'Pure Pursuit', 'Trajectory Tracking', 'Kalman Filters', 'Sensor Fusion', 'CAN/CANopen'],
      description: 'Motion control, state estimation, and system integration',
    },
    {
      icon: Package,
      title: 'Simulation & CAD',
      color: 'from-neon-cyan to-neon-blue',
      skills: ['MATLAB/Simulink', 'Gazebo', 'Blender', 'FreeCAD', 'SolidWorks', 'URDF/Xacro'],
      description: 'Modeling, simulation, and design workflows',
    },
    {
      icon: Network,
      title: 'Tools & Platforms',
      color: 'from-space-600 to-neon-pink',
      skills: ['Docker', 'Git', 'Grafana', 'Foxglove', 'MQTT', 'Socket Programming'],
      description: 'DevOps, monitoring, and distributed system communication',
    },
  ]

  return (
    <section id="skills" className="section-container relative">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building production-grade autonomous systems, from low-level hardware control to high-level decision-making.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur`} />

                {/* Card */}
                <div className="relative glass rounded-lg p-6 h-full flex flex-col hover:border-white/20 transition-all duration-300">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-dark-50">{category.title}</h3>
                      <p className="text-xs text-dark-500 mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-dark-900 border border-dark-700 text-dark-300 group-hover:border-space-500 group-hover:text-space-300 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="glass rounded-lg p-8 text-center border-l-4 border-neon-cyan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-dark-200 leading-relaxed">
            These tools form an integrated knowledge base: <span className="text-space-300 font-semibold">I don't just know technologies—I understand how they fit together in complete autonomous systems.</span> From embedded control and real-time communication to high-level planning and AI, I work across the full robotics stack.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
