'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Eye } from 'lucide-react'

export default function Contact() {

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rishabhnrudani@gmail.com',
      href: 'mailto:rishabhnrudani@gmail.com',
      color: 'from-neon-cyan to-space-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rishabh-rudani',
      href: 'https://www.linkedin.com/in/rishabh-rudani-635817275',
      color: 'from-space-500 to-neon-purple',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Rishabh-spec-ux',
      href: 'https://github.com/Rishabh-spec-ux',
      color: 'from-neon-purple to-space-600',
    },
  ]

  return (
    <section id="contact" className="section-container relative">
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
            <span className="text-gradient">Let's Build Autonomous Systems</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Always excited to discuss robotics, discuss roles with forward-thinking teams, or collaborate on interesting autonomous systems challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark-50 mb-8">Get in Touch</h3>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-lg p-6 flex items-start gap-4 hover:border-white/20 transition-all group"
                    whileHover={{ x: 8 }}
                  >
                    <div className={`p-4 rounded-lg bg-gradient-to-br ${link.color} text-white flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-dark-400 mb-1">{link.label}</p>
                      <p className="text-dark-50 font-semibold truncate group-hover:text-space-300 transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* CV Viewer */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden border border-dark-700 bg-dark-800/50">
                <div className="p-4 bg-gradient-to-r from-space-600/20 to-neon-purple/20 border-b border-dark-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={20} className="text-neon-cyan" />
                    <h3 className="text-lg font-bold text-dark-50">My Resume</h3>
                  </div>
                  <p className="text-sm text-dark-400">View my CV directly below • No download required • Scroll to explore</p>
                </div>

                <iframe
                  src="/Rishabh_N_Rudani_CV.pdf"
                  className="w-full h-96 rounded-b-lg"
                  title="Rishabh Rudani - Resume"
                />

                <div className="p-4 border-t border-dark-700 flex items-center justify-between gap-4">
                  <p className="text-sm text-dark-400">👆 Use the scrollbar above to view the entire resume</p>
                  <motion.a
                    href="/Rishabh_N_Rudani_CV.pdf"
                    download
                    className="px-4 py-2 rounded-lg bg-space-600/20 border border-space-500/50 text-space-300 hover:bg-space-600/30 hover:text-space-200 transition-all text-sm font-medium whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                  >
                    📥 Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
