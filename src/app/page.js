'use client'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import EmailSection from '@/components/EmailSection'
import Navbar from '../components/Navbar'
import ProjectSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-28 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
