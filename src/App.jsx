import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Footer from './components/Footer.jsx'
import { usePageSEO } from './hooks/usePageSEO.js'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  usePageSEO(currentPage)

  // Smooth scroll transitions when switching pages
  const navigateTo = (page, sectionId) => {
    if (page === 'home') {
      setCurrentPage('home')
      if (sectionId) {
        // Wait for state render, then scroll to section
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 80)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (page === 'gallery') {
      setCurrentPage('gallery')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Handle URL hashes on mount (e.g. if someone links to website/#gallery or website/#about)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#gallery') {
        setCurrentPage('gallery')
        window.scrollTo(0, 0)
      } else if (hash) {
        const id = hash.replace('#', '')
        navigateTo('home', id)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <Home navigateTo={navigateTo} />
        ) : (
          <Gallery />
        )}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  )
}
