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
export default function SpaceRoverProject() {
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="rover-project" className="section-container relative">
      <div className="max-w-container mx-auto relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Image */}
            <motion.div
              className="w-full md:w-1/2 rounded-xl overflow-hidden relative shadow-2xl"
              whileHover={{ scale: 1.02 }}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/odyseeus_rover.png?v=2"
                  alt="Odysseus Rover"
                  className="w-full h-auto object-cover rounded-xl max-h-96"
                />
                <div className="absolute left-4 bottom-4 bg-gradient-to-r from-neon-cyan/80 to-neon-purple/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
                  Odysseus Rover
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="w-full md:w-1/2 glass rounded-xl p-6 border border-dark-700"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-dark-800 border border-dark-600">
                <Rocket size={16} className="text-neon-cyan" />
                <span className="text-sm text-space-300">Featured</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2">Space Robotics Hardware & Software Developer</h2>
              <p className="text-md text-dark-300 mb-2 font-medium">Odysseus Rover — University of Würzburg · AMADEE-27</p>
              <p className="text-sm text-dark-400 mb-4">Dec 2025 – Present · Germany</p>

              <div className="space-y-3 text-dark-300">
                <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                  <Eye className="text-neon-cyan mt-1" />
                  <div>
                    <strong className="font-semibold">Perception & Mapping:</strong> Developing a ROS 2-based planetary rover platform for autonomous exploration, rock mapping, localization, perception, navigation, and mission execution.
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                  <Navigation className="text-neon-purple mt-1" />
                  <div>
                    <strong className="font-semibold">Simulation & Validation:</strong> Building simulation environments to test mapping pipelines, sensor logic, waypoint missions, and inspection workflows before hardware deployment.
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                  <Cpu className="text-neon-pink mt-1" />
                  <div>
                    <strong className="font-semibold">Autonomy Architecture:</strong> Designing the autonomy stack across sensor drivers, filtering, SLAM, Nav2 navigation, visual-odometry fallback, and control execution.
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                  <CheckCircle className="text-neon-cyan mt-1" />
                  <div>
                    <strong className="font-semibold">Integration:</strong> Integrating LiDAR, depth camera, IMU, UWB, encoders, point clouds, occupancy grids, and AI-based perception for robust autonomy.
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                  <AlertCircle className="text-neon-pink mt-1" />
                  <div>
                    <strong className="font-semibold">Hardware-Software Co-design:</strong> UWB anchor deployment, microcontroller nodes, battery/solar modules, base-station infrastructure, and embedded integration.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

