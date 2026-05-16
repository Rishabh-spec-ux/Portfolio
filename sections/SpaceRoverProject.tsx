'use client'

import { motion } from 'framer-motion'
import { Rocket, Navigation, Cpu, Eye, AlertCircle, CheckCircle, Github } from 'lucide-react'

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
  return (
    <section id="rover-project" className="section-container relative">
      <div className="max-w-container mx-auto relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-dark-800 border border-dark-600">
            <Rocket size={16} className="text-neon-cyan" />
            <span className="text-sm text-space-300">Project</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Space Robotics Hardware & Software Developer – Odysseus Rover
          </h2>

          <p className="text-lg text-dark-300 max-w-3xl mx-auto mb-2">University of Würzburg Collaboration — AMADEE-27 Space Robotics Platform · Dec 2025 – Present</p>
          <p className="text-md text-dark-400">Germany</p>
        </motion.div>

        <motion.div
          className="mb-10 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative glass rounded-lg p-2 border border-space-500/30">
            <img
              src="/rover.png"
              alt="Odysseus Rover"
              className="w-full h-auto rounded-lg object-cover max-h-96"
            />
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ul className="list-disc pl-6 space-y-3 text-dark-300">
            <li>
              Developing a ROS 2-based planetary rover platform for autonomous exploration, rock mapping, localization, perception, navigation, and mission execution.
            </li>
            <li>
              Building simulation environments to test rover behavior, mapping pipelines, sensor logic, waypoint missions, and autonomous inspection workflows before real-hardware deployment.
            </li>
            <li>
              Designing the autonomy architecture across sensor drivers, filtering, SLAM, localization, Nav2 navigation, visual odometry fallback, rock inspection, and control execution.
            </li>
            <li>
              Integrating LiDAR, depth camera, IMU, UWB sensors, wheel encoders, point clouds, occupancy grids, and AI-based perception for robust rover autonomy.
            </li>
            <li>
              Supporting hardware-software co-design for UWB anchor deployment, microcontroller-based nodes, battery/solar-powered modules, base-station infrastructure, and embedded system integration.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
              <h4 className="text-xl font-bold text-dark-50 group-hover:text-neon-cyan transition-colors mb-1">View on GitHub</h4>
              <p className="text-dark-400 group-hover:text-dark-200 transition-colors">Explore the complete source code, configuration files, and development history</p>
            </div>
          </div>
          <span className="text-neon-cyan text-xl group-hover:translate-x-2 transition-transform">→</span>
        </motion.a>
      </div>
    </section>
  )
}
