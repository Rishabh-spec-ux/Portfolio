'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'

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

export default function Projects() {
  const projects = [
    {
      title: 'Autonomous Surface Vehicle (ASV)',
      company: 'Lemvos',
      description: 'Built complete autonomy stack for an unmanned marine robot with perception, navigation, and control.',
      highlights: [
        'Nav2 integration & path planning',
        'Deep learning marine perception',
        'Pure Pursuit trajectory control',
        'Sensor fusion (IMU + GNSS)',
        'Real-time monitoring with Grafana',
      ],
      tech: ['ROS 2', 'Nav2', 'Gazebo', 'Python', 'C++', 'CAN'],
      role: 'Robotics Software Engineer',
      color: 'from-neon-cyan to-space-500',
    },
    {
      title: 'Autonomous Car (LiDAR-Based)',
      company: 'Academic Project',
      description: 'Full ROS 2 autonomous vehicle with SLAM, costmap generation, and dynamic navigation.',
      highlights: [
        'LiDAR-based SLAM integration',
        'Occupancy grid costmaps',
        'Dynamic path planning',
        'Real-time visualization',
      ],
      tech: ['ROS 2 Jazzy', 'Gazebo', 'RViz2', 'C++', 'Python'],
      role: 'Software Developer',
      color: 'from-neon-purple to-space-600',
    },
    {
      title: 'Vision-Based Pick & Place',
      company: 'Academic Project',
      description: 'MATLAB-based robotic manipulation system with camera calibration and computer vision.',
      highlights: [
        'Camera calibration & image processing',
        'Object detection workflows',
        'Coordinate transformation chains',
        'Trajectory planning',
      ],
      tech: ['MATLAB', 'Computer Vision', 'Image Processing', 'Robotics Toolbox'],
      role: 'Control Systems Engineer',
      color: 'from-space-500 to-neon-pink',
    },
    {
      title: 'Deep Learning Perception',
      company: 'Academic Project',
      description: 'CNN-based image segmentation and object detection for autonomous systems.',
      highlights: [
        'Model training & optimization',
        'Real-time inference pipeline',
        'Transfer learning techniques',
        'Evaluation metrics & validation',
      ],
      tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NumPy'],
      role: 'Machine Learning Engineer',
      color: 'from-neon-pink to-neon-purple',
    },
    {
      title: 'Line Follower Robot',
      company: 'Robotics Club',
      description: 'Embedded system with PID control for autonomous path following using IR sensors.',
      highlights: [
        'PID control algorithm',
        'Sensor calibration & tuning',
        'Real-time state estimation',
        'Hardware optimization',
      ],
      tech: ['Arduino', 'C', 'PID Control', 'IR Sensors'],
      role: 'Hardware/Software Integration',
      color: 'from-space-600 to-neon-cyan',
    },
    {
      title: 'PID Motor Control System',
      company: 'Controls Lab',
      description: 'Real-time DC motor speed and position control with feedback systems.',
      highlights: [
        'PID parameter tuning',
        'Feedback control systems',
        'Real-time monitoring',
        'System identification',
      ],
      tech: ['MATLAB/Simulink', 'DSP', 'Arduino', 'Physics'],
      role: 'Control Systems Designer',
      color: 'from-neon-blue to-space-500',
    },
  ]

  return (
    <section id="projects" className="section-container relative">
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            A collection of robotics, autonomous systems, and embedded projects spanning perception, control, and autonomous decision-making.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur`} />

              {/* Card */}
              <div className="relative glass rounded-lg p-8 h-full flex flex-col border-l-4 border-transparent group-hover:border-l-space-400 transition-all duration-300">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-dark-50 mb-1">{project.title}</h3>
                      <p className="text-sm text-space-400 font-mono">{project.company}</p>
                    </div>
                    <Code2 size={20} className="text-dark-500 group-hover:text-space-400 transition-colors" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-dark-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Role */}
                <p className="text-xs text-dark-400 mb-4 font-semibold">ROLE: {project.role}</p>

                {/* Highlights */}
                <ul className="mb-6 space-y-2 flex-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-dark-300 flex items-start gap-2">
                      <span className="text-space-400 flex-shrink-0">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-dark-900 border border-dark-700 text-dark-300 group-hover:border-space-500 group-hover:text-space-300 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex gap-3 pt-4 border-t border-dark-700">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-sm text-dark-400 hover:text-space-300 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-sm text-dark-400 hover:text-space-300 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <ExternalLink size={16} />
                    Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
