'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/mjgavrez', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
      href: 'https://linkedin.com/in/rishabh-rudani',
      color: 'from-space-500 to-neon-purple',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rishabhrudani',
      href: 'https://github.com/rishabhrudani',
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

        <div className="grid md:grid-cols-2 gap-12">
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

            {/* Resume Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg bg-gradient-to-r from-space-600 to-neon-purple text-white font-semibold hover:from-space-500 hover:to-neon-purple transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(107, 77, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-dark-200 mb-2">Name</label>
                <motion.input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-dark-700 text-dark-50 placeholder-dark-500 focus:border-space-500 focus:outline-none transition-colors"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-dark-200 mb-2">Email</label>
                <motion.input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-dark-700 text-dark-50 placeholder-dark-500 focus:border-space-500 focus:outline-none transition-colors"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-dark-200 mb-2">Message</label>
                <motion.textarea
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-dark-700 text-dark-50 placeholder-dark-500 focus:border-space-500 focus:outline-none transition-colors resize-none"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  className="p-3 rounded-lg bg-red-900/20 border border-red-600 text-red-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  submitted
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan'
                    : loading
                    ? 'bg-dark-700 text-dark-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
                whileHover={!loading && !submitted ? { scale: 1.05 } : {}}
                whileTap={!loading && !submitted ? { scale: 0.95 } : {}}
              >
                {submitted ? (
                  <>
                    <span>✓</span>
                    Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
