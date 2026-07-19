import React, { useState } from 'react'

export default function Header({ currentPage, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (page, sectionId) => {
    setMobileMenuOpen(false)
    navigateTo(page, sectionId)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home', 'home')}
          className="flex items-center gap-2 text-xl font-bold text-slate-900 transition hover:text-teal-700 cursor-pointer bg-transparent border-0 p-0"
        >
          <i className="ri-heart-pulse-line text-teal-700"></i>
          <span>Fatima Gibba<span className="text-teal-700">, RN</span></span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => handleNavClick('home', 'home')}
            className={`text-sm font-medium transition hover:text-teal-700 cursor-pointer ${
              currentPage === 'home' ? 'text-teal-700' : 'text-slate-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('home', 'about')}
            className="text-sm font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('home', 'expertise')}
            className="text-sm font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            Expertise
          </button>
          <button
            onClick={() => handleNavClick('home', 'experience')}
            className="text-sm font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick('home', 'education')}
            className="text-sm font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            Education
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition cursor-pointer ${
              currentPage === 'gallery'
                ? 'bg-teal-800 text-white shadow-md'
                : 'bg-teal-700 text-white hover:bg-teal-800'
            }`}
          >
            Gallery
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden cursor-pointer"
          aria-label="Toggle Menu"
        >
          <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} border-t border-slate-100 bg-white px-6 py-4 md:hidden`}>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => handleNavClick('home', 'home')}
            className="text-left py-2 text-base font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('home', 'about')}
            className="text-left py-2 text-base font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('home', 'expertise')}
            className="text-left py-2 text-base font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            Expertise
          </button>
          <button
            onClick={() => handleNavClick('home', 'experience')}
            className="text-left py-2 text-base font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick('home', 'education')}
            className="text-left py-2 text-base font-medium text-slate-600 transition hover:text-teal-700 cursor-pointer"
          >
            Education
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="mt-2 block rounded-xl bg-teal-700 py-3 text-center text-base font-medium text-white transition hover:bg-teal-800 cursor-pointer"
          >
            Gallery
          </button>
        </nav>
      </div>
    </header>
  )
}
