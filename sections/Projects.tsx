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
      title: 'Autonomous Car (ROS 2 Jazzy)',
      company: 'Academic Project',
      code: 'https://github.com/Rishabh-spec-ux/rn_autonomous',
      description: 'Full ROS 2 autonomous vehicle with LiDAR-based SLAM and LaserScan navigation.',
      highlights: [
        'LiDAR-based SLAM integration',
        'Local & global costmap generation',
        'Nav2 path planning & control',
        'RViz2 real-time visualization',
        'Gazebo simulation validation',
      ],
      tech: ['ROS 2 Jazzy', 'Nav2', 'Gazebo', 'RViz2', 'C++', 'Python'],
      role: 'Robotics Student',
      color: 'from-neon-purple to-space-600',
    },
    {
      title: 'Vision-Based Pick & Place',
      company: 'Academic Project',
      description: 'Cobot system for vision-guided robotic manipulation using MATLAB with camera calibration and object detection.',
      highlights: [
        'Camera calibration & intrinsics',
        'Object detection & pose estimation',
        'Coordinate transformation chains',
        'Trajectory planning for gripper',
      ],
      tech: ['MATLAB', 'Computer Vision', 'Image Processing', 'Robotics Toolbox'],
      role: 'Robotics Lab Student',
      color: 'from-space-500 to-neon-pink',
    },
    {
      title: 'Machine Learning & Deep Learning Portfolio',
      company: 'Academic Projects',
      description: 'Multiple ML/DL models for image segmentation and object detection using CNNs, RNNs, LSTMs, and U-Net.',
      highlights: [
        'CNN architectures for classification',
        'U-Net for semantic segmentation',
        'RNN/LSTM/GRU for sequence modeling',
        'PyTorch & TensorFlow workflows',
        'Model training & validation',
        'Inference optimization',
      ],
      tech: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
      role: 'ML and DL Student',
      color: 'from-neon-pink to-neon-purple',
    },
    {
      title: 'Line Follower Robot',
      company: 'Academic Project',
      description: 'Arduino-based mobile robot with IR sensors for autonomous line tracking using PID control.',
      highlights: [
        'PID control implementation',
        'IR sensor integration & calibration',
        'Motor driver interfacing',
        'Real-time path tracking',
      ],
      tech: ['Arduino', 'C/C++', 'PID Control', 'IR Sensors', 'Motor Drivers'],
      role: 'Embedded Systems student',
      color: 'from-space-600 to-neon-cyan',
    },
    {
      title: 'Control Systems: PID Motor Control',
      company: 'Academic Project',
      description: 'DC motor speed and position control system with PID tuning for stability and transient response.',
      highlights: [
        'PID parameter tuning',
        'System identification & modeling',
        'Bode plots & frequency response',
        'Transient response optimization',
        'Real-time feedback loops',
      ],
      tech: ['MATLAB', 'Simulink', 'Arduino', 'Control Theory', 'DSP'],
      role: 'Control Systems Lab Student',
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
                  {project.code && (
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-dark-400 hover:text-space-300 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
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
