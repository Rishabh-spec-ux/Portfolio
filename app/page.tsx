import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import SpaceRoverProject from '@/sections/SpaceRoverProject'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Workflow from '@/sections/Workflow'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SpaceRoverProject />
      <Experience />
      <Projects />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  )
}
