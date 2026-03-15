'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Star, Zap, Award, Youtube } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export default function Experience() {
  const experiences = [
    {
      title: 'Junior Robotics Software Engineer',
      company: 'Lemvos',
      period: 'Present',
      location: 'Remote / Germany',
      status: 'Current Role',
      description: 'Architecting and implementing production-grade autonomous navigation stacks for USV (Unmanned Surface Vehicles) with focus on real-world deployment and system-level engineering.',
      youtubeLink: 'https://www.youtube.com/watch?v=-LPQpsFACDE',
      youtubeDescription: 'Watch the LM450 autonomous boat in action - live deployment and field testing of the complete autonomy stack',
      overallImpact: 'Led end-to-end development of complete autonomy pipeline from perception to hardware control, deployed on real marine robotics platform.',
      achievements: [
        {
          title: 'Autonomy Pipeline Architecture',
          description: 'Designed and integrated complete system: perception → localization → planning → control with real-time coordination',
          icon: Zap,
        },
        {
          title: 'Navigation Stack Implementation',
          description: 'Implemented Nav2 stack with custom Pure Pursuit trajectory controller for stable, predictable marine navigation behavior',
          icon: Star,
        },
        {
          title: 'Deep Learning Perception',
          description: 'Built marine object detection using deep learning, IPM (Inverse Perspective Mapping), and Bird\'s Eye View for environmental understanding',
          icon: Award,
        },
        {
          title: 'Sensor Fusion System',
          description: 'Engineered robust sensor fusion pipeline integrating IMU + GNSS using robot_localization for accurate state estimation',
          icon: Zap,
        },
        {
          title: 'Motor Control Abstraction',
          description: 'Developed low-level CAN/CANopen motor control layer in C++ with safe hardware interfacing and error handling',
          icon: Star,
        },
        {
          title: 'Mission Management System',
          description: 'Created ROS 2 mission manager with action servers, behavior trees, and FollowWaypoints autonomous behavior',
          icon: Award,
        },
        {
          title: 'Real-Time Monitoring',
          description: 'Implemented Grafana dashboards for telemetry streaming, diagnostics, and live vehicle state visualization',
          icon: Zap,
        },
        {
          title: 'Hardware Validation',
          description: 'Tested and iterated solutions on real USV hardware, conducting field tests and deployment validation',
          icon: Star,
        },
      ],
      tech: ['ROS 2', 'Nav2', 'Gazebo Garden', 'RViz2', 'Foxglove', 'Python', 'C++', 'URDF/Xacro', 'CAN', 'CANopen', 'Sensor Fusion', 'Computer Vision', 'Deep Learning', 'Grafana'],
      highlights: ['End-to-end system integration', 'Real-world deployment', 'Production validation', 'Systems engineering', 'Hardware abstraction', 'Multi-disciplinary stack'],
      impact: [
        'Shipped production autonomous system',
        '8+ core technical subsystems designed',
        'Real marine robotics deployment',
        'Cross-functional system integration',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container relative">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl">
            Real-world robotics engineering with production deployment, system architecture, and autonomous systems at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Background Gradient Accent */}
              <div className="absolute -inset-2 bg-gradient-to-r from-space-600/20 via-neon-purple/10 to-neon-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Main Card Container */}
              <div className="group relative">
                {/* Status Badge */}
                <motion.div
                  className="absolute -top-4 right-6 z-20"
                  initial={{ scale: 0, y: -20 }}
                  whileInView={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan to-space-500 text-dark-950 font-bold text-sm shadow-lg">
                    <Star size={14} className="fill-current" />
                    {exp.status}
                  </div>
                </motion.div>

                {/* Main Card */}
                <div className="glass rounded-2xl p-8 md:p-10 border border-space-500/30 group-hover:border-neon-cyan/50 transition-all duration-300">
                  {/* Header Section */}
                  <div className="mb-8 pb-8 border-b border-dark-700">
                    {/* Company Image */}
                    <div className="mb-6 rounded-lg overflow-hidden h-48">
                      <img 
                        src="/lm450.png" 
                        alt="LM450 USV" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-dark-50 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-2xl bg-gradient-to-r from-neon-cyan to-space-300 bg-clip-text text-transparent font-bold">
                          {exp.company}
                        </p>
                      </div>
                      <Briefcase className="text-neon-cyan" size={32} />
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-neon-cyan" />
                        <span className="text-dark-200 font-semibold">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-neon-purple" />
                        <span className="text-dark-200 font-semibold">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description & Impact Summary */}
                  <div className="mb-8 space-y-4">
                    <p className="text-lg text-dark-100 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                    <motion.div
                      className="p-4 rounded-lg bg-gradient-to-r from-space-900/50 to-neon-purple/20 border-l-4 border-neon-cyan"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-neon-cyan font-semibold">🎯 Overall Impact:</p>
                      <p className="text-dark-200 mt-2">{exp.overallImpact}</p>
                    </motion.div>

                    {exp.youtubeLink && (
                      <motion.a
                        href={exp.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-lg bg-gradient-to-r from-red-900/20 to-space-900/20 border border-red-500/30 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20 transition-all"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-start gap-3">
                          <Youtube size={20} className="text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-red-400 font-semibold text-sm">📹 Video Reference</p>
                            <p className="text-dark-200 mt-1">{exp.youtubeDescription}</p>
                            <p className="text-xs text-red-400/70 mt-2 group-hover:text-red-400 transition-colors">Click to watch on YouTube →</p>
                          </div>
                        </div>
                      </motion.a>
                    )}
                  </div>

                  {/* Key Achievements Grid */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-dark-50 mb-6 uppercase tracking-wider">Technical Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, i) => {
                        const Icon = achievement.icon
                        return (
                          <motion.div
                            key={i}
                            className="group/card glass rounded-lg p-5 border border-dark-700 hover:border-space-500/50 hover:bg-dark-800/50 transition-all"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                          >
                            <div className="flex gap-3 mb-2">
                              <Icon size={18} className="text-neon-cyan flex-shrink-0 mt-0.5 group-hover/card:text-neon-purple transition-colors" />
                              <h5 className="font-bold text-dark-50 text-sm group-hover/card:text-space-300 transition-colors">
                                {achievement.title}
                              </h5>
                            </div>
                            <p className="text-sm text-dark-300 leading-relaxed">
                              {achievement.description}
                            </p>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-purple/10 border border-neon-cyan/30">
                    <h4 className="text-sm font-bold text-neon-cyan mb-4 uppercase tracking-wider">📊 Business Impact</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.impact.map((item) => (
                        <motion.div
                          key={item}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-neon-cyan font-bold text-lg flex-shrink-0">✓</span>
                          <span className="text-dark-100 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Highlights */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-dark-200 mb-4 uppercase tracking-wider">Core Competencies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <motion.span
                          key={highlight}
                          className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-space-600 to-neon-purple border border-space-500 text-neon-cyan font-semibold hover:shadow-lg hover:shadow-space-600/50 transition-all"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          ⭐ {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-8 border-t border-dark-700">
                    <p className="text-xs font-bold text-dark-400 mb-4 uppercase tracking-widest">Technology Stack ({exp.tech.length}+ Technologies)</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-md bg-dark-800 border border-dark-600 text-dark-200 hover:border-neon-cyan hover:text-neon-cyan hover:bg-dark-700/50 transition-all cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Confidential Project Report */}
                  <div className="mt-12 pt-8 border-t border-dark-700">
                    <motion.div
                      className="p-6 rounded-lg bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 hover:border-amber-500/60 transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-2xl">🔒</span>
                        <div>
                          <h4 className="text-lg font-bold text-amber-300 mb-2">Confidential Project Documentation</h4>
                          <p className="text-sm text-dark-300 mb-3">
                            Due to Lemvos company confidentiality policies, proprietary source code and technical implementation details cannot be publicly disclosed. However, the internship report below provides comprehensive documentation of the project scope, architecture decisions, challenges overcome, and technical achievements.
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg overflow-hidden bg-dark-900/50 border border-dark-700">
                        <iframe
                          src="/LM450_Report.pdf"
                          className="w-full h-96 rounded-lg"
                          title="LM450 Internship Report"
                        />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href="/LM450_Report.pdf"
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600/20 border border-amber-500 text-amber-300 hover:bg-amber-600/30 hover:text-amber-200 transition-all text-sm font-medium"
                        >
                          📥 Download Report
                        </a>
                        <p className="text-xs text-dark-500 flex items-center gap-2">
                          <span>▲</span> Scroll inside the viewer above to browse the document
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
